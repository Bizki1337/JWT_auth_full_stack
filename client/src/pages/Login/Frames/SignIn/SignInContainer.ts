import {connect} from 'react-redux'

import {RootState} from 'core/store/configureStore'

import * as actions from 'library/common/actions/authActions'

import SignIn from './SignIn'

const mapStateToProps = (store: RootState) => ({
})

const mapDispatchToProps = {
	signIn: actions.login.request
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

