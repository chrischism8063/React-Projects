import React, { Component } from 'react';
import reverse from './reverse';

export default class MyList extends Component {
    state = {
        items: [
            'Angular',
            'Ember',
            'React',
        ]
    }

    onReverseCLick = reverse.bind =(this);

    render(){
        const {
            state: {
                items, 
            },
            onReverseCLick,
        } = this;

        return(
            <section>
                <button onClick={ onReverseCLick }>Reverse</button>
                <ul>
                { items.map((v, i) => (
                    <li key={ i }> { v }</li>
                ))}
                </ul>
            </section>
        );
    }
}