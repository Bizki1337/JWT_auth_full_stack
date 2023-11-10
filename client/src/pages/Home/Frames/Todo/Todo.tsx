import { ITodo } from 'library/common/interfaces/todo'

import styles from './todo.module.scss'

interface ITodoComponent {
	data: ITodo
}

const Todo = ({
	data
}: ITodoComponent) => {
	return (
		<div className={styles.wrapper}>
			<div>id: {data.id}</div>
			<div>text: {data.text}</div>
		</div>
	)
}

export default Todo