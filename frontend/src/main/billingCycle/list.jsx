import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAll, showForm } from '../../actions/billingCycle'

class List extends Component {

    componentDidMount(){
        const {getAll} = this.props
        getAll()
    }
    renderRows(){
        const {showForm, list} = this.props
        return (
            list.map(billing => (
                <tr key={billing._id}>
                    <td>{billing.name}</td>
                    <td>{billing.month}</td>
                    <td>{billing.year}</td>
                    <td><button className='btn btn-warning' onClick={() => showForm(billing, 'tabEdit')}><i className='fa fa-edit'></i></button><button className='btn btn-danger' onClick={() => showForm(billing, 'tabDelete')}><i className='fa fa-trash-o'></i></button></td>
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
                        <th className='table-actions'></th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }
                </tbody>
            </table>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({getAll, showForm}, dispatch)
const mapStateToProps = state => ({ list : state.billingCycle.list})

export default connect(mapStateToProps, mapDispatchToProps)(List)