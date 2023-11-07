import {connect} from 'react-redux'

import {RootState} from 'core/store/configureStore'

import * as actions from 'library/common/actions/authActions'

import SignUp from './SignUp'

const mapStateToProps = (store: RootState) => ({
})

const mapDispatchToProps = {
	signUp: actions.signUp
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

