import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid col={ props.cols }>
        <div className={ `small-box bg-${ props.color }` } >
            <div className='inner'>
                <h3>{ props.value }</h3>
                { props.text }
            </div>
            <div className='icon'>
                <i className='fa fa-${ props.icon }'></i>
            </div>
        </div>
    </Grid>
)