import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listAllBillingCycles, showForm } from '../../actions/billingCycle'

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
                    <td><button className='btn btn-warning' onClick={() => this.props.showForm(billing, 'tabEdit')}><i className='fa fa-edit'></i></button><button className='btn btn-danger' onClick={() => this.props.showForm(billing, 'tabDelete')}><i className='fa fa-trash-o'></i></button></td>
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
const mapDispatchToProps = dispatch => bindActionCreators({listAllBillingCycles, showForm}, dispatch)
const mapStateToProps = state => ({ list : state.billingCycle.list})

export default connect(mapStateToProps, mapDispatchToProps)(List)