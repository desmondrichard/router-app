import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import CareerList from '../components/CareerList';

function Careers() {
    const careerData=useLoaderData();
    console.log(careerData);
  return (
    <div>
        <h2>Careers</h2>
        
        {careerData && careerData.map((career)=>{
            return (
              
            <Link style={{textDecoration: 'none'}} to={career.id.toString()} key={career.id}>
             <CareerList title={career.title} location={career.location}/>
             </Link>
            
        )
            
        })
        }
    </div>
  )
}

//Career Loader:
export const careerLoader=async()=>{
    const response=await fetch('http://localhost:4000/careers')
    if(!response.ok){
        throw new Error("HTTP_ERROR");
    }
    const jsonResponse=await response.json()
    return jsonResponse
}
export default Careers