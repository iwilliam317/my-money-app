import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'

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
                    <ValueBox value={ this.state.credit } color='green' cols='4' text='Credit'/>
                    <ValueBox value={ this.state.debit } color='red' cols='4' text='Debit'/>
                    <ValueBox value={ this.state.credit - this.state.debit } color='blue' cols='4' text='Remaining'/>
                   
                </Content>
            </div>
        )
    }
}

export default Dashboard