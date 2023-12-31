import { useEffect } from 'react'
import {useLocation, Navigate, Outlet} from 'react-router-dom'

import { ContainerProps } from './RequireAuthContainer'

const RequireAuth = ({
    isFetchingUser,
    access_token,
    user,
    loadUser
}: ContainerProps) => {

    useEffect(() => {
        if (access_token) loadUser()
    }, [])

    const location = useLocation()

    if (!access_token) return <Navigate to='/login' state={{ from: location }} />

    if (isFetchingUser) return <div>loading user...</div>

    // if (!user && !isFetchingUser) return <Navigate to='/login' replace state={{ from: location }} />

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default RequireAuth