import {connect} from 'react-redux'

import {RootState} from 'core/store/configureStore'

import * as actions from 'library/common/actions/todoActions'
import * as selectors from 'library/common/selectors/todoSelectors'

import Home from './Home'

const mapStateToProps = (store: RootState) => ({
    todoList: selectors.getTodoList(store)
})

const mapDispatchToProps = {
    getTodoList: actions.todo.request
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(Home)

