import api from '../../services/api'

const getBillingCycleSummary = () => {
    return dispatch => {
        api.get('/billing-cycles/summary')
        .then(res => {
            dispatch({ type: 'GET_BILLING_CYCLE_SUMMARY', payload: res.data })})
    }
}

export { getBillingCycleSummary }