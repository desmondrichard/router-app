import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function CareerDetail() {
    const {id}=useParams();
    console.log(id);
    const jobData=useLoaderData()
    console.log(jobData);
  return (
    <>
        <hr className='border border-5 border-primary opacity-50'></hr>
        <Card border="primary" style={{ width: '18rem'}}>
        <Card.Header>{jobData.id}</Card.Header>
        <Card.Body>
          <Card.Title>{jobData.title}</Card.Title>
          <Card.Text>
           <span>₹{jobData.salary}</span><br/>
           {jobData.location}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export const jobDetailLoader=async({params})=>{
    const {id}=params
    const response=await fetch('http://localhost:4000/careers/'+id)
    if(!response.ok){
        throw new Error('job post not found');
    }
    const jsonResponse=await response.json();
    return jsonResponse
}

export default CareerDetail