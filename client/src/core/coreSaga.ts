import {all, fork} from 'redux-saga/effects'

import authSaga from 'library/common/sagas/authSaga'

export default function* coreSaga() {
	yield all([
		fork(authSaga),
	])
}
