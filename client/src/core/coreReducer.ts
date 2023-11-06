import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {History} from 'history'

import authReducer from 'library/common/reducers/authReducer'

const createCoreReducer = (history: History) => combineReducers({
	router: connectRouter(history),
	auth: authReducer,
})

export default createCoreReducer
