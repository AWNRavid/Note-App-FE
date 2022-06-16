import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className='container'>
        <h1>Main Page</h1>
        <Link to='/login'><Button>Login</Button></Link>
    </div>
  )
}

export default MainPage