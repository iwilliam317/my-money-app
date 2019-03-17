import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/tab'


class TabHeader extends Component {

    render(){
        const { selectTab, target, icon, label } = this.props

        return (
            <li>
                <a data-toggle='tab' onClick={() => selectTab(target)} data-target={ target }>
                    <i className={`fa fa-${ icon }`}></i>
                    { label }
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ( { tab: state.tab.selectTab } )
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps ,mapDispatchToProps )(TabHeader)