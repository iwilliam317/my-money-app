import React, {Component} from 'react'
import {Field, arrayInsert, arrayRemove} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class CreditList extends Component {

    add(index, item={}){
        const {readOnly, arrayInsert} = this.props
        if(!readOnly){
            arrayInsert('Form', 'credits', index, item)
        }
    }

    remove(index){
        const {arrayRemove} = this.props
        arrayRemove('Form', 'credits', index)
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
                                    <td>
                                        <button type='button' className='btn btn-success' onClick={()=> this.add(index+1)}><i className="fa fa-plus"></i></button>
                                        <button type='button' className='btn btn-warning' onClick={()=> this.add(index+1, element)}><i className='fa fa-clone'></i></button>
                                        <button type='button' className="btn btn-danger" onClick={() => this.remove(index)}><i className=" fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </fieldset>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(CreditList)