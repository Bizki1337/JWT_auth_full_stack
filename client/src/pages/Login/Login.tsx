import { useState } from 'react'

import SignInContainer from './Frames/SignIn/SignInContainer'
import SignUpContainer from './Frames/SignUp/SignUpContainer'


import styles from './login.module.scss'

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <SignInContainer />
            <div className={styles.divider} />
            <SignUpContainer />
        </div>
    )
}

export default Login