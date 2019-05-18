import React, {Component} from 'react'
import Grid from '../../common/layout/grid'

import {Field} from 'redux-form'

class CreditList extends Component {
    render(){
        const list = this.props.list || []
        return (
            <Grid cols='12 6'>
                <fieldset>
                    <legend>Credits</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((element, index) => (
                                <tr key={index}>
                                    <td><Field name={`credits[${index}].name`} component='input'/></td>
                                    <td><Field name={`credits[${index}].value`} component='input'/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList