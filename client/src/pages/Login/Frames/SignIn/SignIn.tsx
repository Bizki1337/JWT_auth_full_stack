import { useState } from 'react'

import { ContainerProps } from './SignInContainer'

import styles from './signIn.module.scss'

const SignIn = ({
	signIn
}: ContainerProps) => {

	const [state, setState] = useState({
		login: '',
		password: '',
	})

	return (
		<div className={styles.wrapper}>
			<div>Вход</div>
			<div>
				<div>Логин</div>
				<input
					type='text'
					onChange={(e) => setState({...state, login: e.target.value})}
				/>
			</div>
			<div>
				<div>Пароль</div>
				<input
					type='text'
					onChange={(e) => setState({...state, password: e.target.value})}
				/>
			</div>
			<button onClick={() => signIn(state)}>Войти</button>
		</div>
	)
}

export default SignIn