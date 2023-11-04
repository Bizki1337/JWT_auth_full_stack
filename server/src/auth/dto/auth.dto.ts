import { IsNotEmpty, IsString } from 'class-validator'

export class AuthDto {
	@IsNotEmpty()
	@IsString()
	login: string

	@IsNotEmpty()
	@IsString()
	name: string

	@IsNotEmpty()
	@IsString()
	password: string
}

export class SigninDto {
	@IsNotEmpty()
	@IsString()
	login: string

	@IsNotEmpty()
	@IsString()
	password: string
}