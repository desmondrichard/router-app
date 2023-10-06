import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import AppBreadcrumbs from '../components/AppBreadcrumbs';

function Rootlayout() {
    return (
        <div>
            <NavBar />
            <Container style={{padding:"15px"}}>
                <AppBreadcrumbs />
            </Container>
            <Container style={{padding:"35px"}}>
                <Outlet />
            </Container>

        </div>
    )
}

export default Rootlayout