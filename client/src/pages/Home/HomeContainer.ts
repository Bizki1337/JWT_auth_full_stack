import {connect} from 'react-redux'

import {RootState} from 'core/store/configureStore'

import Home from './Home'

const mapStateToProps = (store: RootState) => ({
})

const mapDispatchToProps = {
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(Home)

