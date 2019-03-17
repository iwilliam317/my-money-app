import { combineReducers } from 'redux'
import dashboard from './dashboardReducer'
import tab from './tabReducer'

const reducers = combineReducers({
    dashboard,
    tab
})

export default reducers