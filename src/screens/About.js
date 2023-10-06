import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function About() {
  const [user,setUser]=useState('Test')
  if(!user){
    return <Navigate to='/' replace={true}/>
  }
  return (
    <div>
      <h2>About</h2>
      <p style={{color:"gray"}}>This is a sample about page</p>
      <Button variant="success" onClick={()=>setUser(null)}>Logout</Button>
    </div>
  )
}

export default About