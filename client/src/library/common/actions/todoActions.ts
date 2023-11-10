import { createAsyncAction } from 'typesafe-actions'

import { ITodo } from '../interfaces/todo'

import * as types from '../types/todoTypes'

export const todo = createAsyncAction(
	types.todoList.REQUEST,
	types.todoList.SUCCESS,
	types.todoList.FAILURE,
)<undefined, ITodo[], string>()

export const saveTodo = createAsyncAction(
	types.saveTodo.REQUEST,
	types.saveTodo.SUCCESS,
	types.saveTodo.FAILURE,
)<string, ITodo, string>()