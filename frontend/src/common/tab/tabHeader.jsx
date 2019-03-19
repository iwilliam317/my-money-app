import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/tab'


class TabHeader extends Component {

    render(){
        const { selectTab, target, icon, label } = this.props
        const { selected } = this.props.tab

        return (
            <li className={ selected === target ?  'active' : '' }>
                <a data-toggle='tab' onClick={() => selectTab(target)} data-target={ target }>
                    <i className={`fa fa-${ icon }`}></i>
                    { label }
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ( { tab: state.tab } )
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps ,mapDispatchToProps )(TabHeader)