import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const Header = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">Github-Users</Navbar.Brand> */}
        <Link to="/home"> Github-Users</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            {/* <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav> */}
            <Nav>
                {/* <Nav.Link >Profile</Nav.Link> */}
                <Link to="/profile">Profile</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}