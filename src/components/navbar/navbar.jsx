import { CartWidget } from "../cartWidget";
import { NavLink } from "react-router-dom";

import "./navbar.css";

import { Navbar, NavDropdown, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="NavBar">
        <Container className="ContainerNavbar">
          <Navbar.Brand className="FormatText">
            <NavLink to="/">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="FormatText">
            <NavLink to="/catalogo">catalogo</NavLink>
          </Navbar.Brand>
          <NavDropdown title="Categoria" className="FormatText">
            <NavDropdown.Item className="TextDropdown">Electronicos</NavDropdown.Item>
            <NavDropdown.Item className="TextDropdown">Hombres</NavDropdown.Item>
            <NavDropdown.Item className="TextDropdown">Mujer</NavDropdown.Item>
          </NavDropdown>
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
