import { useState } from 'react'

import styles from './signUp.module.scss'

const SignUp = () => {
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
		</div>
	)
}

export default SignUp