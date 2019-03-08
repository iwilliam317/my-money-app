import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'

class Dashboard extends Component {
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