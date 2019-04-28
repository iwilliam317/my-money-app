import api from '../../services/api'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../../actions/tab'

const INITIAL_STATE = {}

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
                dispatch(init())
            })
            .catch(err => {
                err.response.data.errors.forEach(e => toastr.error('Error', e))
            })
    }

}

const updateBillingCycle = values => {
    return dispatch => {
        console.log('ads')
        const { _id } = values

        api.put(`/billing-cycles/${_id}`, values)
            .then(res => {
                toastr.success('Success', 'Billing Cycle edited!')
                dispatch(init())
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

const init = () => {
    return [
        selectTab('tabList'),
        showTabs('tabList', 'tabNew'),
        listAllBillingCycles(),
        initialize('Form', INITIAL_STATE)
    ]
}

export { listAllBillingCycles, createBillingCycle, showBillingCycle, updateBillingCycle, init }