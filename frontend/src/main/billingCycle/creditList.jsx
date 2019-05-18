import React, {Component} from 'react'
import {Field} from 'redux-form'

class CreditList extends Component {
    render(){
        const list = this.props.list || []
        return (
            <div>
                <fieldset>
                    <legend>Credits</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((element, index) => (
                                <tr key={index}>
                                    <td><Field name={`credits[${index}].name`} component='input'/></td>
                                    <td><Field name={`credits[${index}].value`} component='input'/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </fieldset>
            </div>
        )
    }
}

export default CreditList