import { ForbiddenException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { PrismaService } from 'src/prisma/prisma.service'
import { AuthDto, SigninDto } from './dto'
import { Tokens } from './types'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwtService: JwtService 
	) {}

	async signupLocal(dto: AuthDto): Promise<Tokens> {
		const { login, password, name } = dto
		const hash = await this.hashData(password)
		const newUser = await this.prisma.user.create({
			data: {
				login,
				name,
				hash
			}
		})

		const tokens = await this.getTokens(newUser.id, newUser.login)

		await this.updateRTHash(newUser.id, tokens.refresh_token)
		return tokens
	}

	async signinLocal(dto: SigninDto): Promise<Tokens> {
		const {login, password} = dto
		const user = await await this.prisma.user.findUnique({
			where: {login}
		})

		if (!user) throw new ForbiddenException('Such user does not exist')

		const passwordMatches = await bcrypt.compare(password, user.hash)
		if (!passwordMatches) throw new ForbiddenException('Access Denied')

		const tokens = await this.getTokens(user.id, user.login)

		await this.updateRTHash(user.id, tokens.refresh_token)
		return tokens
	}

	async logout(userId: number) {
		await this.prisma.user.updateMany({
			where: {
				id: userId,
				hashedRt: {
					not: null
				}
			},
			data: {
				hashedRt: null
			}
		})
	}

	refreshTokens() {}

	async updateRTHash(userId: number, rt: string) {
		const hash = await this.hashData(rt)
		await this.prisma.user.update({
			where: {
				id: userId
			},
			data: {
				hashedRt: hash
			}
		})
	}

	hashData(data: string) {
		return bcrypt.hash(data, 10)
	}

	async getTokens(userId: number, login: string): Promise<Tokens> {
		const [at, rt] = await Promise.all([
			this.jwtService.signAsync({
				sub: userId,
				login
			}, {
				secret: 'at-secret',
				// acces token will live 15 minutes
				expiresIn: 60 * 15
			}),
			this.jwtService.signAsync({
				sub: userId,
				login
			}, {
				secret: 'rt-secret',
				// refresh token will live 7 days
				expiresIn: 60 * 60 * 24 * 7
			})
		])

		return {
			access_token: at,
			refresh_token: rt,
		}
	}
}
