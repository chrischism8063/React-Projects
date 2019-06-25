import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'

//functional component because this doesnt need to keep track of a state

const NavBar = () => {
    return(
        <nav className="nav-wrapper blue darken-8">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default NavBar;