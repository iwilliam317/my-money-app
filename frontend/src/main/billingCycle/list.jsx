import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listAllBillingCycles } from '../../actions/billingCycle'

class List extends Component {

    componentDidMount(){
        this.props.listAllBillingCycles()
    }
    renderRows(){
        console.log(this.props.list)
    }

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
                    {this.props.list.map(billing => (
                        <tr key={billing._id}>
                            <td>{billing.name}</td>
                            <td>{billing.month}</td>
                            <td>{billing.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({listAllBillingCycles}, dispatch)
const mapStateToProps = state => ({ list : state.billingCycle.list})

export default connect(mapStateToProps, mapDispatchToProps)(List)