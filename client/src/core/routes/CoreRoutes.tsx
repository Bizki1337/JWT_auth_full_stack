import {Navigate, Route, Routes} from 'react-router-dom'

import HomeContainer from 'pages/Home'
import LoginContainer from 'pages/Login'
import RequireAuthContainer from './RequireAuthContainer'

const CoreRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<RequireAuthContainer />}>
                    <Route path='/home' element={<HomeContainer />} />
                </Route>
                <Route path='/login' element={<LoginContainer />} />
            </Routes>
        </>
    )
}

export default CoreRoutes