import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {History} from 'history'

import authReducer from 'library/common/reducers/authReducer'
import todoReducer from 'library/common/reducers/todoReducer'

const createCoreReducer = (history: History) => combineReducers({
	router: connectRouter(history),
	auth: authReducer,
	todo: todoReducer,
})

export default createCoreReducer
