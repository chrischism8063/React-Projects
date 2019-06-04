import React from 'react'
import './Star.css'

//ES6 structuring
const Star = ({ selected, onClick }) => 
    <div className={ ( selected) ? "star selected" : "star"}
        onClick= { onClick } 
    />

export default Star
