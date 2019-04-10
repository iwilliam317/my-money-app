import api from '../../services/api'
import { toastr } from 'react-redux-toastr'

const listAllBillingCycles = () => {
    const response = api.get('/billing-cycles')
    return {
        type: 'LIST_BILLING_CYCLES',
        payload: response
    }
}

const createBillingCycle = values => {
    api.post('/billing-cycles', values)
        .then(res => toastr.success('Success', 'Billing Cycle created!'))
        .catch(err => {
            err.response.data.errors.forEach(e => toastr.error('Error', e))
        })
    return {
        type: 'TEMPORARY'
    }
}

export { listAllBillingCycles, createBillingCycle }