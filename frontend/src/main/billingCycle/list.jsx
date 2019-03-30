import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listAllBillingCycles } from '../../actions/billingCycle'

class List extends Component {
    render(){
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Month</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({listAllBillingCycles}, dispatch)
const mapStateToProps = state => ({ list : state.billingCycle.list})

export default connect(mapStateToProps, mapDispatchToProps)(List)