import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <h1 className="text-center">Page Not Found</h1>
        <h3>Go to <Link to ='/'>Home Page</Link> </h3>
    </div>
  )
}

export default PageNotFound