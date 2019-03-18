import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabContent extends Component {
    render(){
        const { selectTab } = this.props.tab
        return (
            <div id={this.props.id} className={`tab-pane ${selectTab ? 'active' : ''}`}>
                {this.props.children}
                { selectTab }
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab : state.tab })
export default connect(mapStateToProps)(TabContent)