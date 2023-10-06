import React from 'react';
import { Outlet } from 'react-router-dom';
// import Careers from '../screens/Careers';
import Container from 'react-bootstrap/esm/Container';

function CareersLayout() {
  return (
    <div>
        <h2>Careers:</h2>
        <h3 style={{color:"gray" ,fontSize:"16px"}}>palace, royal residence, and sometimes a seat of government or religious centre. The word is derived from the Palatine Hill in Rome, where the Roman emperors built their residences. As a building a palace should be differentiated from a castle, which was originally any fortified dwelling.palace, royal residence, and sometimes a seat of government or religious centre. The word is derived from the Palatine Hill in Rome, where the Roman emperors built their residences. As a building a palace should be differentiated from a castlen</h3>
        <Container style={{padding:"35px"}}>
            <Outlet />  
        </Container>
        
    </div>
  )
}

export default CareersLayout