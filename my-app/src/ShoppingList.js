import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';    //Utilize external file

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                //props is utilized to access state variables of the object
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
