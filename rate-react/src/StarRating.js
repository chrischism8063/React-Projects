import React, { Component } from 'react'
import Star from './Star'
import './StarRating.css'

// [...Array(length)] creates an array of undefined slots
const createArray = length => [...Array(length)]

export default class StarRating extends Component{
    constructor(props){
        super(props)
        this.state = {
            starsSelected: props.starsSelected || 0
        }
        this.change = this.change.bind(this)    //Must bind the change method to the object--research binding
    }

    //Changes the state of the stars selected by passing desired variable
    change(starsSelected){
        this.setState( { starsSelected } )
        this.props.onChange(starsSelected)
    }

    render(){
        // Utilizing the below structure to pull variables or props needed prevents having to use full calls such as this.props.name
        const { totalStars } = this.props
        const { starsSelected } = this.state

        // using map((n, i)) to add keys to specific objects
        // prevents warning: Each child in a list should have a unique "key" prop.
        return (
            <div className="star-rating">
                { createArray(this.props.totalStars).map((n, i) => 
                    <Star key= { i } 
                        selected = { i < starsSelected }
                        onClick = { () => this.change( i+1 ) } />) }
                <p> { starsSelected } of { totalStars }</p>
            </div>
        )
    }
}

StarRating.defaultProps = {
    totalStars: 5,
    onChange: f => f //Due to not calling onChange on the front end, this is default to now pass params through when it changes
}