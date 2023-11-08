import {call, put, takeLatest} from 'redux-saga/effects'

import * as api from '../apis/todoApi'
import * as actions from '../actions/todoActions'
import * as types from '../types/todoTypes'

function* todoListSaga() {
	try {
		const {data: data} = yield call(api.requestTodoList)
		yield put(actions.todo.success(data))
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

export default function* todo() {
	yield takeLatest(types.todoList.REQUEST, todoListSaga)
}