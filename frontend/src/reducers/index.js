import { combineReducers } from 'redux'
import dashboard from './dashboard'
import tab from './tab'
import billingCycle from './billingCycle'

const reducers = combineReducers({
    dashboard,
    tab,
    billingCycle
})

export default reducers