import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Router 6.4 and above</Navbar.Brand>
                    <Nav defaultActiveKey="/home">
                        <Nav.Item>
                            <NavLink to='/' className="a">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='about' className="a">About</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='contact' className="a">Contact</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='careers' className="a">Careers</NavLink>
                        </Nav.Item>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar