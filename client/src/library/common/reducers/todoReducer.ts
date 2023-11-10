import {ActionType, getType} from 'typesafe-actions'

import * as actions from '../actions/todoActions'

import { ITodo } from '../interfaces/todo'

export type TodoState = Readonly<{
	isLoading: boolean
	isError: boolean
	todoList: ITodo[] | []
}>

const initialState: TodoState = {
	isLoading: false,
	isError: false,
	todoList: [],
}

const todoReducer = (
	state = initialState,
	action: ActionType<typeof actions>
): TodoState => {

	switch (action.type) {

		case getType(actions.todo.request):
			return {
				...state,
				isLoading: true,
			}

		case getType(actions.todo.success):
			return {
				...state,
				todoList: action.payload,
				isLoading: false,
				isError: false,
			}

		case getType(actions.todo.failure):
			return {
				...state,
				isLoading: false,
				isError: true,
			}

		case getType(actions.saveTodo.request):
			return {
				...state,
				isLoading: true,
			}

		case getType(actions.saveTodo.success):
			return {
				...state,
				todoList: [...state.todoList, action.payload],
				isLoading: false,
				isError: false,
			}

		case getType(actions.saveTodo.failure):
			return {
				...state,
				isLoading: false,
				isError: true,
			}

		default:
			return state
	}
}

export default todoReducer