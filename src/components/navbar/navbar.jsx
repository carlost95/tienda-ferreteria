import { CartWidget } from "../cartWidget";
import { NavLink } from "react-router-dom";

import "./navbar.css";

import { Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="cartLocation cartColor">
        <Container fluid>
          <Navbar.Brand className="fontColor" >
            <NavLink to="/home">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="fontColor" >
            <NavLink to="/catalogo">catalogo</NavLink>
          </Navbar.Brand>


        </Container>
      </Navbar>
      {/* <Navbar bg="light" expand="lg" className="cartLocation cartColor">
        <Container >
          <Navbar.Brand className="fontColor" >Tienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link className="fontColor">Home</Nav.Link>
              <Nav.Link className="fontColor">Link</Nav.Link>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar> */}
    </div >
  );
};
