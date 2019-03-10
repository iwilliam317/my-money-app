import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row'

import api from '../../services/api'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = { credit: 0, debit: 0}
    }

    getSummary(){
        api.get('/summary').then(res => {
            const { credit, debit } = res.data || 0
            this.setState({ credit, debit})
        })

    }

    componentDidMount(){
        this.getSummary()
    }

    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' small='version 1.0' />
                <Content>
                    <Row>
                        <ValueBox value={ `R$ ${this.state.credit}` } color='green' cols='12 4' text='Total Credit' icon='bank' />
                        <ValueBox value={ `R$ ${this.state.debit}` } color='red' cols='12 4' text='Total Debit'  icon='credit-card'/>
                        <ValueBox value={ `R$ ${this.state.credit - this.state.debit}` } color='blue' cols='12 4' text='Balance' icon='money'/>
                    </Row>
                   
                </Content>
            </div>
        )
    }
}

export default Dashboard