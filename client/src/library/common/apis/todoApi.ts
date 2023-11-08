import {fetch} from 'library/utilities/fetch'

export const requestTodoList = () =>
	fetch.get('/todo/all')