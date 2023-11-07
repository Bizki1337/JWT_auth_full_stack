import { useState } from 'react'

import { ContainerProps } from './SignUpContainer'

import styles from './signUp.module.scss'

const SignUp = ({
	signUp
}: ContainerProps) => {
	const [state, setState] = useState({
		login: '',
        name: '',
		password: '',
	})

	return (
		<div className={styles.wrapper}>
			<div>Регистрация</div>
			<div>
				<div>Логин</div>
				<input
					type='text'
					onChange={(e) => setState({...state, login: e.target.value})}
				/>
			</div>
            <div>
				<div>Имя</div>
				<input
					type='text'
					onChange={(e) => setState({...state, name: e.target.value})}
				/>
			</div>
			<div>
				<div>Пароль</div>
				<input
					type='text'
					onChange={(e) => setState({...state, password: e.target.value})}
				/>
			</div>
			<button
				onClick={() => signUp(state)}
			>Зарегистрироваться</button>
		</div>
	)
}

export default SignUp