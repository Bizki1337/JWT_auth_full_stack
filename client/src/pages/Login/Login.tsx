import { useState } from 'react'

import SignInContainer from './Frames/SignIn/SignInContainer'
import SignUp from './Frames/SignUp'


import styles from './login.module.scss'

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <SignInContainer />
            <div className={styles.divider} />
            <SignUp />
        </div>
    )
}

export default Login