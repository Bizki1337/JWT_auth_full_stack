import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import {Store} from 'redux'

// import {logout, setTokens} from 'library/common/actions/authActions'
import {setTokens} from 'library/common/actions/authActions'

const onRequest = (config: any) => {
    const token = localStorage.getItem('access_token')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (token) config.headers!['Authorization'] = 'Bearer ' + token
    return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
}

interface AxiosRequestConfigRetry extends AxiosRequestConfig {
    _retry: boolean
}

const onResponse = (
    response: AxiosResponse,
    store: Store
): AxiosResponse => {
    return response
}

const onResponseError = async (
    error: AxiosError,
    store: Store,
    axiosInstance: AxiosInstance
): Promise<AxiosError> => {

    const {dispatch} = store

    const originalConfig = error.config as AxiosRequestConfigRetry

    const refreshURL = 'auth/refresh'

    const shouldNotRetry = ![refreshURL, 'auth/user/authenticate']
        .some(url => url === originalConfig.url)


    if (shouldNotRetry && error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true
            try {
                const {data: newTokens} = await axiosInstance.post(refreshURL, {
                    refresh_token: localStorage.getItem('refresh_token')
                })
                dispatch(setTokens(newTokens))
                return axiosInstance(originalConfig) as unknown as AxiosError
            } catch (_error) {
				console.log('logout')
                // dispatch(logout())
                return Promise.reject(_error)
            }
        }
    }
    return Promise.reject(error)
}

export default function setupInterceptorsTo(axiosInstance: AxiosInstance, store: Store): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError)
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => onResponse(response, store),
        (error: AxiosError) => onResponseError(error, store, axiosInstance)
    )
    return axiosInstance
}