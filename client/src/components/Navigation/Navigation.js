import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const { isAuthenticated , userEmail } = useContext(AuthContext);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} fixed="top">
    <Container>
      <Navbar.Brand href="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">All games</Nav.Link>
          {isAuthenticated && (
            <Nav.Link href="/create">Create game</Nav.Link>
          )}
        </Nav>
        <Nav>
          {!isAuthenticated ? ( 
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </>
          ) : (
            <>
            <p>{userEmail}</p>
            <Nav.Link href="/logout">Logout</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

