import {fetch} from 'library/utilities/fetch'

export const requestTodoList = () =>
	fetch.get('/todo/all')

export const saveTodo = (text: string) =>
	fetch.post('/todo/create', {text})