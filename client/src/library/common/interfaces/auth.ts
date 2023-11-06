export interface ITokens {
	access_token: string
	refresh_token: string
}

export interface ISignInParams {
	login: string
	password: string
}

export interface IUser {
	id: number
	login: string
	name: string
}