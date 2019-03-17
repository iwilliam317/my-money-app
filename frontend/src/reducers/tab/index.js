const INITIAL_STATE = { selectTab: '2' }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SELECT_TAB':
            return { ...state, selectTab: action.payload }
        default:
            return state
    }
}