import {call, put, takeLatest} from 'redux-saga/effects'

import * as api from '../apis/authApi'
import * as actions from '../actions/authActions'
import * as types from '../types/authTypes'

function* LoginSaga(action: ReturnType<typeof actions.login.request>) {
	try {
		const {data: {data}} = yield call(api.loadUser, action.payload)
		console.log('data', data)
		// yield put(actions.login.success())
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

export default function* test() {
	yield takeLatest(types.login.REQUEST, LoginSaga)
}