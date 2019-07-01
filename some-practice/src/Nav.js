import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const Nav = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <NavbarBrand href="#home">Home</NavbarBrand>
            <Nav className="mr-auto">
                <NavLink href="#features">Feactures</NavLink>
                <NavLink href="#features">Feactures</NavLink>
            </Nav>
        </Navbar>
    );
}

export default Nav;