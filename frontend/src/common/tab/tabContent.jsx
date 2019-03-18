import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabContent extends Component {
    render(){
        return (
            <div>{this.props.tab.selectTab}</div>
        )
    }
}

const mapStateToProps = state => ({ tab : state.tab })
export default connect(mapStateToProps)(TabContent)