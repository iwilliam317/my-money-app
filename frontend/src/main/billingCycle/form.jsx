import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {init} from '../../actions/billingCycle'
import CreditList from './creditList'

class Form extends Component {

    buttonType(type){
        switch(type){
            case 'edit':
                return { color: 'primary', text: 'Update'}
            case 'delete':
                return { color: 'danger', text: 'Delete'}
            default:
                return { color: 'success', text: 'Submit'}
        }
    }
    render(){
        const { type, handleSubmit, readOnly } = this.props
        const {color, text} = this.buttonType(type)
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input' placeholder='E.g. Shopping' readOnly={readOnly}/>
                    <Field name='month' component='input' placeholder='E.g. 09' readOnly={readOnly}/>
                    <Field name='year' component='input' placeholder='E.g. 2019' readOnly={readOnly}/>
                    <CreditList />
                </div>
                <div className='box-footer'>
                    <button className={`btn btn-${color}`} type='submit'>{text}</button>
                    <button className='btn btn-default' type='button' onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
Form = reduxForm({form: 'Form', destroyOnUnmount: false})(Form)
export default connect(null, mapDispatchToProps)(Form)