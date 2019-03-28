import api from '../../services/api'

const listAllBillingCycles = () => {
    const response = api.get('/billing-cycles')
    return {
        type: 'LIST_BILLING_CYCLES',
        payload: response
    }
}

export { listAllBillingCycles }