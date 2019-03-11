import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class Dashboard extends Component {

    loadSummary(){
        this.props.getSummary()
    }

    componentDidMount(){
        this.loadSummary()
    }
    render(){
        
        const { credit, debit } = this.props

        return (
            <div>
                <ContentHeader title='Dashboard' small='version 1.0' />
                <Content>
                    <Row>
                        <ValueBox value={ `R$ ${credit}` } color='green' cols='12 4' text='Total Credit' icon='bank' />
                        <ValueBox value={ `R$ ${debit}` } color='red' cols='12 4' text='Total Debit'  icon='credit-card'/>
                        <ValueBox value={ `R$ ${credit - debit}` } color='blue' cols='12 4' text='Balance' icon='money'/>
                    </Row>
                   
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ( { credit : state.dashboard.credit, debit: state.dashboard.debit })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)