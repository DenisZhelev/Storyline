
import { useState, useContext } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import useStyles from './styles';

export const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const { isAuthenticated , username } = useContext(AuthContext);
  const classes = useStyles();

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Storyline</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Link className={classes.navLink} to="/catalog">Explore</Link>
            {isAuthenticated && (
              <Link className={classes.navLink} to="/create">Tell Story</Link>
            )}
          </Nav>
          <Nav>
            {!isAuthenticated ? ( 
              <>
                <Link className={classes.navLink} to="/login">Login</Link>
                <Link className={classes.navLink} to="/register">Register</Link>
              </>
            ) : (
              <>
              <Link className={classes.navLink} to="/">Hello, {username}</Link>
              <Link className={classes.navLink} to="/logout">Logout</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
