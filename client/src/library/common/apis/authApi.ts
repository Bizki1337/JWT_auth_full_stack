import {fetch} from 'library/utilities/fetch'

import { ISignInParams } from '../interfaces/auth'

export const loadUser = (params: ISignInParams) => 
	fetch.post(`/auth/local/signin`, params)