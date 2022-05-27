import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

function NavbarComp() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Notes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
          </Nav>
          <Button>Login</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;