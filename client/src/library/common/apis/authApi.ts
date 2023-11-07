import {fetch} from 'library/utilities/fetch'

import { ISignInParams } from '../interfaces/auth'

export const signin = (params: ISignInParams) => 
	fetch.post(`/auth/local/signin`, params)

export const signUp = (params: ISignInParams) => 
	fetch.post(`/auth/local/signup`, params)

export const requestUser = () =>
	fetch.get('/auth/user/details')

export const logout = () =>
	fetch.post('/auth/logout')