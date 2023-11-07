import {ActionType, getType} from 'typesafe-actions'

import * as actions from '../actions/authActions'
import { IUser } from '../interfaces/auth'

export type AuthState = Readonly<{
	isLoading: boolean
	isError: boolean
	isFetchingUser: boolean
	isFetchingUserError: boolean
	user: IUser | null
}>

const initialState: AuthState = {
	isLoading: false,
	isFetchingUser: false,
	isError: false,
	isFetchingUserError: false,
	user: null,
}

const authReducer = (
	state = initialState,
	action: ActionType<typeof actions>
): AuthState => {

	switch (action.type) {

		case getType(actions.signIn):
			return {
				...state,
				isLoading: true,
			}

		case getType(actions.signUp):
			return {
				...state,
				isLoading: true,
			}

		case getType(actions.authSuccess):
			return {
				...state,
				user: action.payload,
				isLoading: false,
				isError: false,
			}

		case getType(actions.authFailure):
			return {
				...state,
				isLoading: false,
				isError: true,
			}

		case getType(actions.user.request):
			return {
				...state,
				isFetchingUser: true,
				isError: false,
			}

		case getType(actions.user.success):
			return {
				...state,
				user: action.payload,
				isFetchingUser: false,
				isFetchingUserError: false
			}

		case getType(actions.user.failure):
			return {
				...state,
				isFetchingUserError: true
			}

		default:
			return state
	}
}

export default authReducer