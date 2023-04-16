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
      <Navbar.Brand to="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">All games</Link>
          {isAuthenticated && (
            <Link to="/create">Create game</Link>
          )}
        </Nav>
        <Nav>
          {!isAuthenticated ? ( 
            <>
              <Link as={Link} to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
            <p>{userEmail}</p>
            <Link to="/logout">Logout</Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

