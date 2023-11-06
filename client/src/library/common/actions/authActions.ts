import {createAsyncAction} from 'typesafe-actions'

import * as types from '../types/authTypes'

import * as interfaces from '../interfaces/auth'

export const user = createAsyncAction(
	types.user.REQUEST,
	types.user.SUCCESS,
	types.user.FAILURE,
)<number, interfaces.IUser, string>()