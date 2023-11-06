import {ActionType, getType} from 'typesafe-actions'

import * as actions from '../actions/authActions'
import { IUser } from '../interfaces/auth'

export type AuthState = Readonly<{
	isLoading: boolean
	isError: boolean
	user: IUser | null
}>

const initialState: AuthState = {
	isLoading: false,
	isError: false,
	user: null
}

const authReducer = (
	state = initialState,
	action: ActionType<typeof actions>
): AuthState => {

	switch (action.type) {

		case getType(actions.user.request):
			return {
				...state,
				isLoading: true,
			}

		case getType(actions.user.success):
			return {
				...state,
				isLoading: false,
				isError: false,
				user: action.payload
			}

		case getType(actions.user.failure):
			return {
				...state,
				isLoading: false,
				isError: true,
			}

		default:
			return state
	}
}

export default authReducer