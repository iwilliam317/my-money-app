import React, { Component } from 'react'
import { connect } from 'react-redux'

import If from '../operator/if'

class TabContent extends Component {
    
    render(){

        const { id } = this.props
        const { selected, tabsVisible } = this.props.tab
        const isTabVisible = tabsVisible[id]
 
        return (
            <If test={isTabVisible}>
                <div id={this.props.id} className={`tab-pane ${ id === selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab : state.tab })
export default connect(mapStateToProps)(TabContent)