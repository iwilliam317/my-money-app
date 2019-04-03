import React, {Component} from 'react'

class Form extends Component {
    render(){
        return (
            <form role='form'>
                <div className='box-body'></div>
                <div className='box-footer'>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Form