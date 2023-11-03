import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

import { PrismaService } from 'src/prisma/prisma.service'
import { AuthDto } from './dto'
import { Tokens } from './types'

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	hashData(data: string) {
		return bcrypt.hash(data, 10)
	}

	async signupLocal(dto: AuthDto): Promise<Tokens> {
		const { login, password, name } = dto
		const hash = await this.hashData(password)
		const newUser = this.prisma.user.create({
			data: {
				login,
				name,
				hash
			}
		})
	}

	signinLocal() {}

	logout() {}

	refreshTokens() {}
}
