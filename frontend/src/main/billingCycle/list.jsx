import React, { Component } from 'react'

class List extends Component {
    render(){
        return (
            <table class='table'>
                <thead>
                    <th>Description</th>
                    <th>Month</th>
                    <th>Year</th>
                </thead>
            </table>
        )
    }
}

export default List