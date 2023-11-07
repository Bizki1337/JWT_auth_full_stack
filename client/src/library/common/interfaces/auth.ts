export interface ITokens {
	access_token: string
	refresh_token: string
}

export interface ISignInParams {
	login: string
	password: string
}

export interface ISignUpParams {
	login: string
	name: string
	password: string
}

export interface IUser {
	sub: number
	login: string
	name: string
	iat: number
	exp: number
}