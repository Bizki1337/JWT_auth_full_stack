import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { PrismaService } from 'src/prisma/prisma.service'
import { AuthDto } from './dto'
import { Tokens } from './types'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwtService: JwtService 
	) {}

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

		return tokens
	}

	signinLocal() {}

	logout() {}

	refreshTokens() {}
}
