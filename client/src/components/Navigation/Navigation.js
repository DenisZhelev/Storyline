// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import {Link} from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   button: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.down('sm')]: {
//       display: 'none',
//     },
//   },
//   drawer: {
//     width: 250,
//   },
// }));

// export const Navigation = () => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     setIsDrawerOpen(open);
//   };

//   const drawerContent = (
//     <div className={classes.drawer}>
//       <List>
//         <ListItem button>
//           <ListItemText primary="All games" />
//         </ListItem>
//         <Divider />
//         <ListItem button>
//           <ListItemText primary="Create Game" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Logout" />
//         </ListItem>
//         <Divider />
//         <ListItem button>
//         <Link to = '/login'>LOGIN</Link>
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Register" />
//         </ListItem>
//       </List>
//     </div>
//   );

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         {isSmallScreen && (
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//         )}
//         <div id="user">
//           {!isSmallScreen && (
//             <>
//               <Button color="inherit" className={classes.button} href="#">
//                 All games
//               </Button>
//               <Button color="inherit" className={classes.button} href="/create">
//                 Create Game
//               </Button>
//               <Button color="inherit" className={classes.button} href="#">
//                 Logout
//               </Button>
//             </>
//           )}
//         </div>
//         <div id="guest">
//           {!isSmallScreen && (
//             <>
//               {/* <Button color="inherit" className={classes.button} href="/login">
//                 Login
//               </Button> */}
//               <Link to = '/login'>Login</Link>
//               <Button color="inherit" className={classes.button} href="/register">
//                 Register
//               </Button>
//             </>
//           )}
//         </div>
//         {isSmallScreen && (
//           <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
//             {drawerContent}
//           </Drawer>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

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
            <Nav.Link href="/create">Create game</Nav.Link>
            <NavDropdown title="More" id="navbar-dropdown">
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

// export const Navigation = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} style={{ position: 'absolute' }}>
//       <Container>
//         <Navbar.Brand href="/">My App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="/">All games</Nav.Link>
//             <Nav.Link href="/create">Create game</Nav.Link>
//             <NavDropdown title="More" id="navbar-dropdown">
//               <NavDropdown.Item href="#">Logout</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link as={Link} to="/login">Login</Nav.Link>
//             <Nav.Link href="/register">Register</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
