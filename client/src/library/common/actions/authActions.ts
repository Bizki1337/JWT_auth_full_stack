import {createAction, createAsyncAction} from 'typesafe-actions'

import * as types from '../types/authTypes'

import * as interfaces from '../interfaces/auth'

export const user = createAsyncAction(
	types.user.REQUEST,
	types.user.SUCCESS,
	types.user.FAILURE,
)<undefined, interfaces.IUser, string>()

export const signIn = createAction(types.signIn.REQUEST)<interfaces.ISignInParams>()
export const signUp = createAction(types.signUp.REQUEST)<interfaces.ISignUpParams>()
export const authSuccess = createAction(types.auth.SUCCESS)<interfaces.IUser>()
export const authFailure = createAction(types.auth.FAILURE)<undefined>()
export const logout = createAction(types.auth.LOGOUT)<undefined>()

export const setTokens = createAction(types.auth.SET_TOKENS)<interfaces.ITokens>();