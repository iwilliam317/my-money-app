import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listAllBillingCycles, showBillingCycle } from '../../actions/billingCycle'

class List extends Component {

    componentDidMount(){
        this.props.listAllBillingCycles()
    }
    renderRows(){
        return (
            this.props.list.map(billing => (
                <tr key={billing._id}>
                    <td>{billing.name}</td>
                    <td>{billing.month}</td>
                    <td>{billing.year}</td>
                    <td><button className='btn btn-warning' onClick={() => this.props.showBillingCycle(billing)}>edit</button></td>
                </tr>
            ))
        )
    }

    render(){
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }
                </tbody>
            </table>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({listAllBillingCycles, showBillingCycle}, dispatch)
const mapStateToProps = state => ({ list : state.billingCycle.list})

export default connect(mapStateToProps, mapDispatchToProps)(List)