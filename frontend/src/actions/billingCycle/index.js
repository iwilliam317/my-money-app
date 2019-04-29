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


const submit = (values, method) => {
    console.log('oi')
    return dispatch => {
        const _id = values._id ? values._id : ''
        
        api[method](`/billing-cycles/${_id}`, values)
        .then(res => {
            toastr.success('Success', 'Operation successfuly')
            dispatch(init())
        })
        .catch(err => {
            err.response.data.errors.forEach(e => toastr.error('Error', e))
        })
        
    }
}
const createBillingCycle = values => {
    console.log('das')
    return submit(values, 'post')
}
const updateBillingCycle = values => {
    return submit(values, 'put')
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