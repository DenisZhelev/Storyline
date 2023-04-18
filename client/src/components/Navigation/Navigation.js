// import { useState, useContext } from 'react';
// import { Navbar, Nav, Container} from 'react-bootstrap';
// import { AuthContext } from '../../contexts/AuthContext';
// import { Link } from 'react-router-dom';

// export const Navigation = () => {
//   const [expanded, setExpanded] = useState(false);
//   const { isAuthenticated , userEmail } = useContext(AuthContext);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} fixed="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="mr-auto">
//             <Link as={Link} to="/catalog">All games</Link>
//             {isAuthenticated && (
//               <Link as={Link} to="/create">Create game</Link>
//             )}
//           </Nav>
//           <Nav>
//             {!isAuthenticated ? ( 
//               <>
//                 <Link as={Link} to="/login">Login</Link>
//                 <Link as={Link} to="/register">Register</Link>
//               </>
//             ) : (
//               <>
//               <p>{userEmail}</p>
//               <Link as={Link} to="/logout">Logout</Link>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

import { useState, useContext } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    marginRight: '20px',
    '&:hover': {
      color: 'gray',
      textDecoration: 'none',
    },
    '&:active': {
      color: 'gray',
      textDecoration: 'none',
    },
  },
});

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
