import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard'
import BillingCycle from '../billingCycle'

export default props => (
    <Router history={ hashHistory}>
        <Route path='/' component={ Dashboard }/>
        <Route path='/billing-cycles' component={ BillingCycle }/>
        <Redirect from='*' to='/' />
    </Router>
)