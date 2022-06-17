import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComp.css';

function NavbarComp({ isLogin, handleLogout, whoLogin }) {
  const rightSide = {
    // margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };

  const rightSide2 = {
    // margin: "1rem",
    textDecoration: "none",
    color: 'white',
    border: '1px white solid',
    padding: '0 10px',
  };

  return (
    <div>
      <Navbar  variant="dark" className="nav">
        <Container>
          <Navbar.Brand>My Note App</Navbar.Brand>
          <Nav className="me-auto">
            <Link style={rightSide2} to="/">Home</Link>
            {/* <Link to="/about" className="mx-1">
              About
            </Link> */}
            {localStorage.getItem('isLogin') && (
              <Link style={rightSide2} to="/note" className="mx-1">
                Note
              </Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {localStorage.getItem('isLogin') && <p className='welcome' style={rightSide}>Welcome {whoLogin}</p>}
            {localStorage.getItem('isLogin') && (
              <Link style={rightSide} className="button-logout" onClick={handleLogout}>
                Logout
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
