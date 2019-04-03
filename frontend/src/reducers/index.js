import { combineReducers } from 'redux'
import dashboard from './dashboard'
import tab from './tab'
import billingCycle from './billingCycle'

import {reducer as form} from 'redux-form'

const reducers = combineReducers({
    dashboard,
    tab,
    billingCycle,
    form
})

export default reducers