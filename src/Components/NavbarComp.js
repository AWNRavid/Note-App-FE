import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

function NavbarComp({ isLogin, handleLogout }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Link to="/">
            <Navbar.Brand>Notes</Navbar.Brand>
          </Link> */}
          <Navbar.Brand>Notes</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/about' className='mx-1'>About</Link>
          </Nav>
          {isLogin && <Button onClick={handleLogout}>Logout</Button>}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
