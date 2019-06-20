import React, { Component } from 'react'


//This is a great example how to turn JSON into a list...
export default class MyList extends Component {
    render(){
        const { items } = this.props;       //parsing all props to items array

        return(
            <div>
                <ul>
                    { items.map(i => (
                        <li key={ i } > { i }</li>
                    ))}
                </ul>
            </div>
        )
    }
}