import api from '../../services/api'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../../actions/tab'

const INITIAL_STATE = {}

const getAll = () => {
    const response = api.get('/billing-cycles')
    return {
        type: 'LIST_BILLING_CYCLES',
        payload: response
    }
}


const submit = (values, method) => {
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
const create = values => {
    return submit(values, 'post')
}
const update = values => {
    return submit(values, 'put')
}
const remove = values => {
    return submit(values, 'delete')
}
const showForm = (billingCycle, tab) => {
    return dispatch => {
        dispatch(
            [showTabs(tab), selectTab(tab), initialize('Form', billingCycle)]
            )
    }
}


const init = () => {
    return [
        selectTab('tabList'),
        showTabs('tabList', 'tabNew'),
        getAll(),
        initialize('Form', INITIAL_STATE)
    ]
}

export { getAll, create, showForm, update, remove, init }