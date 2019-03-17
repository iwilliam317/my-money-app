import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/tab'


class TabHeader extends Component {
    render(){
        return (
            <li>
                <a data-toggle='tab' onClick={() => this.props.selectTab(this.props.target)}data-target={ this.props.target }>
                    <i className={`fa fa-${ this.props.icon }`}></i>
                    { this.props.label }
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ( { tab: state.tab.selectTab } )
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps ,mapDispatchToProps )(TabHeader)