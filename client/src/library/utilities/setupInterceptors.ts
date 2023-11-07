import {Store} from 'redux'

import {fetch} from './fetch'
import setupInterceptorsTo from './interceptorHelpers'

const setupInterceptors = (store: Store) => {
	setupInterceptorsTo(fetch, store)
}

export default setupInterceptors