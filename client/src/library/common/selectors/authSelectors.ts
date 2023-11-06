import {createSelector} from 'reselect'
import {RootState} from 'core/store/configureStore'

export const getIsLoading = (state: RootState) => state.auth.isLoading
export const getUser = (state: RootState) => state.auth.user