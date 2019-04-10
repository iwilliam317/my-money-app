import { combineReducers } from 'redux'
import dashboard from './dashboard'
import tab from './tab'
import billingCycle from './billingCycle'

import {reducer as form} from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

const reducers = combineReducers({
    dashboard,
    tab,
    billingCycle,
    form,
    toastr: toastrReducer
})

export default reducers