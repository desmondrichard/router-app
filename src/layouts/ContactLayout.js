import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './ContactLayout.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
function ContactLayout() {
    return (
        <div>
            <h2>Contact</h2>
            <h3 style={{color:"gray" ,fontSize:"16px" , paddingBottom:"23px"}}>palace, royal residence, and sometimes a seat of government or religious centre. The word is derived from the Palatine Hill in Rome, where the Roman emperors built their residences. As a building a palace should be differentiated from a castle, which was originally any fortified dwelling.palace, royal residence, and sometimes a seat of government or religious centre. The word is derived from the Palatine Hill in Rome, where the Roman emperors built their residences. As a building a palace should be differentiated from a castle, which was originally any fortified dwelling</h3>
            
                <Nav className='b'>
                    <Nav.Item>
                        <NavLink to='mail'><Button variant="outline-primary">Mail Us</Button></NavLink>
                    </Nav.Item>
                    <Nav.Item>
                         <NavLink to='phone'><Button variant="outline-primary">Call Us</Button></NavLink>
                    </Nav.Item>   
                </Nav>
                <Container style={{padding:"35px"}}>
                <Outlet />
                </Container>
                
            

        </div>
    )
}

export default ContactLayout