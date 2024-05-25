import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Navigation.css';


export default function Navigation(props) {
  return (
    <Navbar className={`Navbar Navbar-expand-lg Navbar-${props.Mode} bg-${props.Mode}`}>
      <Container fluid>
        <Navbar.Brand to="#" className={`text-${props.Mode === 'light'?'dark':'light'}`}>{props.Title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav><Link to="#" style={{textDecoration:'none'}} className={`text-${props.Mode === 'light'?'dark':'light'} mx-3`}>Home</Link></Nav>
           {/* <Nav ><Link to="/about" style={{textDecoration:'none'}} className={`text-${props.Mode === 'light'?'dark':'light'} mx-2`}>{props.About}</Link></Nav> */}
          </Nav>
        </Navbar.Collapse>
        <Form className={`text-${props.Mode === 'light'?'dark':'light'}`}>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Enable DarkMode"
        onClick={props.toggleMode}
      />
    </Form>
      </Container>
    </Navbar>
  );
}
// Navigation.propTypes = {
//             Title:propTypes.string,
//             About:propTypes.string
// }
// Navigation.defaultProps = {
//   Title:"Jakaas Gaming",
//   About:"About Us"
// }