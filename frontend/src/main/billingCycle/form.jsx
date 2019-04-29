import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {init} from '../../actions/billingCycle'

class Form extends Component {
    render(){
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input' placeholder='E.g. Shopping' readOnly={readOnly}/>
                    <Field name='month' component='input' placeholder='E.g. 09' readOnly={readOnly}/>
                    <Field name='year' component='input' placeholder='E.g. 2019' readOnly={readOnly}/>
                </div>
                <div className='box-footer'>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                    <button className='btn btn-default' type='button' onClick={this.props.init}>Cancel</button>
                </div>
               
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
Form = reduxForm({form: 'Form', destroyOnUnmount: false})(Form)
export default connect(null, mapDispatchToProps)(Form)