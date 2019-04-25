import api from '../../services/api'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../../actions/tab'

const listAllBillingCycles = () => {
    const response = api.get('/billing-cycles')
    return {
        type: 'LIST_BILLING_CYCLES',
        payload: response
    }
}

const createBillingCycle = values => {
    return dispatch => {
        api.post('/billing-cycles', values)
            .then(res => {
                toastr.success('Success', 'Billing Cycle created!')
                dispatch([
                    resetForm('billingCycleForm'),
                    listAllBillingCycles(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabNew')
                    ])
            })
            .catch(err => {
                err.response.data.errors.forEach(e => toastr.error('Error', e))
            })
    }

}

const showBillingCycle = billingCycle => {
    return dispatch => {
        dispatch(
            [showTabs('tabEdit'), selectTab('tabEdit'), initialize('Form', billingCycle)]
            )
    }
}

export { listAllBillingCycles, createBillingCycle, showBillingCycle }