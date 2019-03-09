import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Grid from '../../common/layout/grid'

import api from '../../services/api'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = { credit: 0, debit: 0}
    }

    getSummary(){
        api.get('/summary').then(res => {
            const { credit, debit} = res.data || 0
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
                    <Grid cols='12 6 4 2'>
                        <h2>{ this.state.credit }</h2>
                        <h2>{ this.state.debit }</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis, officia, odit a amet reprehenderit placeat expedita debitis ullam dolore reiciendis harum sapiente totam nostrum esse, magnam dolor animi cum.
                    </Grid>
                </Content>
            </div>
        )
    }
}

export default Dashboard