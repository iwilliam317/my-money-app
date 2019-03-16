import React from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import TabHeader from '../../common/tab/tabHeader'


export default props => (
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
                <TabsContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta adipisci illo quibusdam inventore rem unde vel sequi dolor laboriosam? Voluptatum veniam aperiam porro doloremque ipsa aut dicta totam corporis?</TabsContent>
            </Tabs>
        </Content>
    </div>
)