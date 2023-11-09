import {connect} from 'react-redux'

import {RootState} from 'core/store/configureStore'

import * as actions from 'library/common/actions/authActions'

import Header from './Header'

const mapStateToProps = (store: RootState) => ({})

const mapDispatchToProps = {
	logout: actions.logout
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(Header)

