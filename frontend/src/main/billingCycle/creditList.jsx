import React, {Component} from 'react'
import Grid from '../../common/layout/grid'

// import {Field} from 'redux-form'

class CreditList extends Component {
    render(){
        return (
            <Grid cols='12 6'>
                <fieldset>
                    <legend>Credits</legend>
                    {/* <Field name=''/>
                    <Field name=''/> */}
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList