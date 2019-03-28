const INITIAL_STATE = { list: [] }

const billingCycleReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LIST_BILLING_CYCLES':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}

export default billingCycleReducer