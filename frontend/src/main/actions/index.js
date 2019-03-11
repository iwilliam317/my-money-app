import api from '../../services/api'

const getSummary = () => {
    const res = api.get('/summary')
    return ({
        type: 'GET_SUMMARY',
        payload: res
                    
    })
}

export { getSummary }