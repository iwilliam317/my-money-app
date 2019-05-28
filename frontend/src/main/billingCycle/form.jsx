import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector } from 'redux-form'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {init} from '../../actions/billingCycle'
import ItemList from './itemList'

import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row'

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

    
    sumSummary(){
        const sum = (a, b) => a + b
        const numbers = [5, 10, 25]
        const debts = this.props.debts || [0]
        return debts.map(d => d.value || 0).reduce(sum)
    }

    render(){
        const { type, handleSubmit, readOnly, credits, debts, init } = this.props
        const {color, text} = this.buttonType(type)
        return (
            <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                    <div className='row'>
                        <Field name='name' component='input' placeholder='E.g. Shopping' readOnly={readOnly}/>
                        <Field name='month' component='input' placeholder='E.g. 09' readOnly={readOnly}/>
                        <Field name='year' component='input' placeholder='E.g. 2019' readOnly={readOnly}/>
                    </div>
                    <br/>
                    <div className='row'>
                        <h1>{this.sumSummary()}</h1>
                        <Content>
                            <Row>
                                <ValueBox value={ `R$ 500` } color='green' cols='12 4' text='Total Debit'  icon='credit-card'/>
                                <ValueBox value={ `R$ 300` } color='red' cols='12 4' text='Total Credit' icon='bank' />
                                <ValueBox value={ `R$ 200` } color='blue' cols='12 4' text='Balance' icon='money'/>
                            </Row>
                        </Content>
                        <ItemList list={credits} readOnly={readOnly} legend='Credits' field='credits' cols='12 6'/>
                        <ItemList list={debts} readOnly={readOnly} legend='Debts' field='debts' cols='12 6' />
                    </div>
                </div>
                <div className='box-footer'>
                    <button className={`btn btn-${color}`} type='submit'>{text}</button>
                    <button className='btn btn-default' type='button' onClick={init}>Cancel</button>
                </div>
            </form>
        )
    }
}

Form = reduxForm({form: 'Form', destroyOnUnmount: false})(Form)
const selector = formValueSelector('Form')
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
const mapStateToProps = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')}) 
export default connect(mapStateToProps, mapDispatchToProps)(Form)