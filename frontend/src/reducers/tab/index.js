const INITIAL_STATE = { selected: '', tabsVisible: {} }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SELECT_TAB':
            return { ...state, selected: action.payload }
        case 'SHOW_TABS':
            return { ...state, tabsVisible : action.payload }
        default:
            return state
    }
}