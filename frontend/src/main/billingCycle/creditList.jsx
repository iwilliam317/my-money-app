import React, {Component} from 'react'
import {Field} from 'redux-form'

class CreditList extends Component {

    add(index, object={}){
        console.log(index+1)
    }
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
                                    <td><button type='button' className='btn btn-success' onClick={()=> this.add(index, element)}><i className="fa fa-plus"></i></button></td>
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