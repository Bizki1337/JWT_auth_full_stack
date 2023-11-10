import { useEffect, useState } from 'react'

import HeaderContainer from './Frames/Header/HeaderContainer'

import { ITodo } from 'library/common/interfaces/todo'
import { ContainerProps } from './HomeContainer'

import styles from './home.module.scss'
import Button from 'library/components/Button'
import Todo from './Frames/Todo/Todo'

const Home = ({
	todoList,
	getTodoList,
	addTodo,
}: ContainerProps) => {

	useEffect(() => {getTodoList()}, [])

	const [todo, setTodo] = useState('')

	return (
		<div className={styles.wrapper}>
			<HeaderContainer />
			<div className={styles.contentWrapper}>
				<div className={styles.inputWrapper}>
					<input
						type='text'
						placeholder='Название'
						className={styles.input}
						onChange={(e) => setTodo(e.target.value)}
					/>
					<Button
						onClick={() => addTodo(todo)}
						text='Записать'
					/>
				</div>
				<div className={styles.contentInnerWrapper}>
					{!!todoList.length && todoList.map((todo: ITodo) => (
						<Todo
							key={`todo-${todo.id}`}
							data={todo}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home