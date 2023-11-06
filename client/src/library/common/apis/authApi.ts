import {fetch} from 'library/utilities/fetch'

export const loadUser = () => 
	fetch.get(``)