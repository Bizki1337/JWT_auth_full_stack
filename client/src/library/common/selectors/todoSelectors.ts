import {RootState} from 'core/store/configureStore'

export const getIsLoading = (state: RootState) => state.todo.isLoading
export const getTodoList = (state: RootState) => state.todo.todoList