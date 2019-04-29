import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import TabHeader from '../../common/tab/tabHeader'
import TabContent from '../../common/tab/tabContent'
import List from './list'
import Form from './form'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab, showTabs } from '../../actions/tab'
import { create, update, remove } from '../../actions/billingCycle'

class BillingCycle extends Component {
    
    componentDidMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabNew')
    }

    render(){
        const {create, update, remove} = this.props
        return (
            <div>
                <ContentHeader title='Billing Cycles' description='version 1.0' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader icon='bars' label='List' target='tabList' />
                            <TabHeader icon='plus' label='New' target='tabNew' />
                            <TabHeader icon='pencil' label='Edit' target='tabEdit' />
                            <TabHeader icon='trash-o' label='Delete' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <h1>List</h1>
                                <List />
                            </TabContent>
                            <TabContent id='tabNew'>
                                <h1>New</h1>
                                <Form onSubmit={create} />
                            </TabContent>
                            <TabContent id='tabEdit'>
                                <h1>Edit</h1>
                                <Form onSubmit={update}/>    
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <h1>Delete</h1>
                                <Form onSubmit={remove} readOnly={true} /> 
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)