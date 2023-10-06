import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
function CareerList({title,location}) {
  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {location}
        </div>
      </ListGroup.Item> 
    </ListGroup>
  )
}

export default CareerList