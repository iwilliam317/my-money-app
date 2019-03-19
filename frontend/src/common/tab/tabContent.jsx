import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabContent extends Component {
    render(){

        const { id } = this.props
        const { selected } = this.props.tab

        return (
            <div id={this.props.id} className={`tab-pane ${ id === selected ? 'active' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab : state.tab })
export default connect(mapStateToProps)(TabContent)