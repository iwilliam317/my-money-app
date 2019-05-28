import React, {Component} from 'react'
import {Field, arrayInsert, arrayRemove} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Grid from '../../common/layout/grid'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row'

class CreditList extends Component {

    add(index, item={}){
        const {readOnly, arrayInsert, field} = this.props
        if(!readOnly){
            arrayInsert('Form', `${field}`, index, item)
        }
    }

    remove(index){
        const {arrayRemove, list, field} = this.props
        if(list.length > 1){
            arrayRemove('Form', `${field}`, index)
        }
    }
    render(){
        const list = this.props.list || []
        const {legend, field, cols} = this.props
        return (
            <div>
                <Content>
                    <Row>
                        <ValueBox value={ `R$ 500` } color='green' cols='12 4' text='Total Debit'  icon='credit-card'/>
                        <ValueBox value={ `R$ 300` } color='red' cols='12 4' text='Total Credit' icon='bank' />
                        <ValueBox value={ `R$ 200` } color='blue' cols='12 4' text='Balance' icon='money'/>
                    </Row>
               
                </Content>
                <Grid cols={cols}>
                    <fieldset>
                        <legend>{legend}</legend>
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
                                        <td><Field name={`${field}[${index}].name`} component='input'/></td>
                                        <td><Field name={`${field}[${index}].value`} component='input'/></td>
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
                </Grid>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(CreditList)