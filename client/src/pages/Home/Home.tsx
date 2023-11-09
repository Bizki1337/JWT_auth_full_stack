import { useEffect } from 'react'

import HeaderContainer from './Frames/Header/HeaderContainer'

import { ITodo } from 'library/common/interfaces/todo'
import { ContainerProps } from './HomeContainer'

import styles from './home.module.scss'

const Home = ({
	todoList,
	getTodoList,
}: ContainerProps) => {

	useEffect(() => {
		getTodoList()
	}, [])

	return (
		<div className={styles.wrapper}>
			<HeaderContainer />
			<h2>Todo list</h2>
			{!!todoList.length && todoList.map((todo: ITodo) => (
				<div key={`todo-${todo.id}`}>
					<div>id: {todo.id}</div>
					<div>text: {todo.text}</div>
				</div>
			))}
		</div>
	)
}

export default Home