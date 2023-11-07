import {call, put, takeLatest} from 'redux-saga/effects'
import { push } from 'connected-react-router'

import * as api from '../apis/authApi'
import * as actions from '../actions/authActions'
import * as types from '../types/authTypes'

import parseJwt from 'library/utilities/parseJwt'
import { IUser } from '../interfaces/auth'

function* LoginSaga(action: ReturnType<typeof actions.signIn>) {
	try {
		const {data: data} = yield call(api.signin, action.payload)
		const user = parseJwt(data.access_token)
		localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)
		yield put(actions.authSuccess(user))
		yield put(push('/home'))
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
			yield put(actions.authFailure())
		}
	}
}

function* registerSaga(action: ReturnType<typeof actions.signUp>) {
	try {
		const {data: data} = yield call(api.signUp, action.payload)
		const user = parseJwt(data.access_token)
		localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)
		yield put(actions.authSuccess(user))
		yield put(push('/home'))
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
			yield put(actions.authFailure())
		}
	}
}

function* userSaga() {
	try {
		const {data: data} = yield call(api.requestUser)
		yield put(actions.user.success(data))
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

function setTokensSaga(action: ReturnType<typeof actions.setTokens>) {
	const {access_token, refresh_token} = action.payload
	localStorage.setItem('access_token', access_token)
	localStorage.setItem('refresh_token', refresh_token)
}

export default function* auth() {
	yield takeLatest(types.signIn.REQUEST, LoginSaga)
	yield takeLatest(types.signUp.REQUEST, registerSaga)
	yield takeLatest(types.user.REQUEST, userSaga)
	yield takeLatest(types.auth.SET_TOKENS, setTokensSaga)
}