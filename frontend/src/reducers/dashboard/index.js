const INITIAL_STATE = { summary: { credit: 0, debit: 0 } }

const dasboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'GET_BILLING_CYCLE_SUMMARY':
            const { debit, credit } = action.payload
            return { ...state, summary: { credit, debit } }
        default:
            return state
    }
}

export default dasboardReducer