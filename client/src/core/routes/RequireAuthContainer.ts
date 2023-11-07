import {connect} from 'react-redux'

import {RootState} from 'core/store/configureStore'

import {user} from 'library/common/actions/authActions'
import {getIsFetchingUser, getUser} from 'library/common/selectors/authSelectors'

import RequireAuth from './RequireAuth'

const mapStateToProps = (store: RootState) => ({
	access_token: localStorage.getItem('access_token'),
	isFetchingUser: getIsFetchingUser(store),
	user: getUser(store)
})

const mapDispatchToProps = {
	loadUser: user.request,
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth)