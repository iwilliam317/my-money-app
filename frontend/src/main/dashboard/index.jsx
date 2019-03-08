import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'

import axios from 'axios'

class Dashboard extends Component {
    getCredit(){
        const api = axios.create({ baseURL: 'http://localhost:3003/api/v1/billing-cycles'})
        api.get('/summary').then(res => {
            const { credit, debit} = res.data
            console.log(credit, debit)
        })

    }

    componentDidMount(){
        this.getCredit()
    }
    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' small='version 1.0' />
                <Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis, officia, odit a amet reprehenderit placeat expedita debitis ullam dolore reiciendis harum sapiente totam nostrum esse, magnam dolor animi cum.
                </Content>
            </div>
        )
    }
}

export default Dashboard