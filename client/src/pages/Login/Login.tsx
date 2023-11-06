import { useState } from 'react'

import { ContainerProps } from './LoginContainer'

import styles from './login.module.scss'

const Login = ({
    signIn,
}: ContainerProps) => {

    const [state, setState] = useState({
        login: '',
        password: ''
    })

    console.log('state', state)

    return (
        <div className={styles.wrapper}>
            <div>
                <span>Логин</span>
                <input
                    onChange={(e: any) => setState({...state, login: e.target.value})}
                    type='text'
                    className={styles.input}
                />
            </div>
            <div>
                <span>Пароль</span>
                <input
                    onChange={(e: any) => setState({...state, password: e.target.value})}
                    type='password'
                    className={styles.input}
                />
            </div>
            <button onClick={() => signIn(state)}></button>
        </div>
    )
}

export default Login