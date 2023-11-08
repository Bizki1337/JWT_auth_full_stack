import Button from 'library/components/Button'

import { ContainerProps } from './HomeContainer'

import styles from './home.module.scss'
import { useEffect } from 'react'
import { ITodo } from 'library/common/interfaces/todo'

const Home = ({
	todoList,
	getTodoList,
}: ContainerProps) => {

	useEffect(() => {getTodoList()}, [])

	return (
		<div className={styles.wrapper}>
			<h2>Todo list</h2>
			{!!todoList.length && todoList.map((todo: ITodo) => (
				<div>
					<div>id: {todo.id}</div>
					<div>text: {todo.text}</div>
				</div>
			))}
		</div>
	)
}

export default Home