import {all, fork} from 'redux-saga/effects'

import authSaga from 'library/common/sagas/authSaga'
import todoSaga from 'library/common/sagas/todoSaga'

export default function* coreSaga() {
	yield all([
		fork(authSaga),
		fork(todoSaga),
	])
}
