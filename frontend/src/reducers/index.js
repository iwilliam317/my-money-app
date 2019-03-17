import { combineReducers } from 'redux'
import dashboard from './dashboard'
import tab from './tab'

const reducers = combineReducers({
    dashboard,
    tab
})

export default reducers