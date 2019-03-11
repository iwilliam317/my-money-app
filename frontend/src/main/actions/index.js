import api from '../../services/api'

const getSummary = () => {
    return dispatch => {
        api.get('/summary')
        .then(res => {
            dispatch({ type: 'GET_SUMMARY', payload: res.data })})
    }
}

export { getSummary }