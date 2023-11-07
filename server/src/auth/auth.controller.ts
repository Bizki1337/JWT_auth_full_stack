import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common'
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common/decorators'
import { RtGuard } from 'src/common/guards'

import { AuthService } from './auth.service'
import { AuthDto, SigninDto } from './dto'
import { Tokens } from './types'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@Post('local/signup')
	@HttpCode(HttpStatus.CREATED)
	signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.signupLocal(dto)
	}

	@Public()
	@Post('local/signin')
	@HttpCode(HttpStatus.OK)
	signinLocal(@Body() dto: SigninDto): Promise<Tokens> {
		return this.authService.signinLocal(dto)
	}

	@Get('user/details')
	@HttpCode(HttpStatus.OK)
	getUser(@GetCurrentUserId() userId: number) {
		return this.authService.getUser(userId)
	}

	@Post('logout')
	@HttpCode(HttpStatus.OK)
	logout(@GetCurrentUserId() userId: number) {
		return this.authService.logout(userId)
	}

	@Public()
	@UseGuards(RtGuard)
	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	refreshTokens(
		@GetCurrentUserId() userId: number,
		@GetCurrentUser('refreshToken') refreshToken: string
	) {
		return this.authService.refreshTokens(userId, refreshToken)
	}
}
