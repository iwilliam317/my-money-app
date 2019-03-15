import React from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'

export default props => (
    <div>
        <ContentHeader title='Billing Cycles' description='version 1.0' />
        <Content>
            <Tabs>
                <TabsHeader>
                    <li>tab 1</li>
                    <li>tab 2</li>
                    <li>tab 3</li>
                    <li>tab 4</li>
                </TabsHeader>
                <TabsContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta adipisci illo quibusdam inventore rem unde vel sequi dolor laboriosam? Voluptatum veniam aperiam porro doloremque ipsa aut dicta totam corporis?</TabsContent>
            </Tabs>
        </Content>
    </div>
)