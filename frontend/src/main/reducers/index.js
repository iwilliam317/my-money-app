import { combineReducers } from 'redux'

const reducers = combineReducers({
    dashboard: () => ({ credit: 4500, debit: 2100 })
})

export default reducers