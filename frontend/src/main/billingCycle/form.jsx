import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

class Form extends Component {
    render(){
        return (
            <form role='form' onSubmit={this.props.handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input'/>
                    <Field name='month' component='input'/>
                    <Field name='year' component='input'/>
                </div>
                <div className='box-footer'>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'Form'})(Form)