import { CartWidget } from "../cartWidget";
import "./navbar.css";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="cartLocation cartColor">
        <Container >
          <Navbar.Brand className="fontColor" href="#home">Tienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link className="fontColor">Home</Nav.Link>
              <Nav.Link className="fontColor">Link</Nav.Link>
              <NavDropdown title="Category" className="fontColor">
                <NavDropdown.Item className="fontColor">Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </div>
  );
};
