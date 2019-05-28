import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/dashboard'

class Dashboard extends Component {

    loadSummary(){
        this.props.getBillingCycleSummary()
    }

    componentDidMount(){
        this.loadSummary()
    }
    render(){
        
        const { credit, debit } = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' description='version 1.0' />
                <Content>
                    <Row>
                        <ValueBox value={ `R$ ${debit}` } color='green' cols='12 4' text='Total Debit'  icon='credit-card'/>
                        <ValueBox value={ `R$ ${credit}` } color='red' cols='12 4' text='Total Credit' icon='bank' />
                        <ValueBox value={ `R$ ${credit - debit}` } color='blue' cols='12 4' text='Balance' icon='money'/>
                    </Row>
                   
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ( { summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)