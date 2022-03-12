import { CartWidget } from "../cartWidget";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { Navbar, NavDropdown, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="NavBar">
        <Link className="FormatIconStore" to="/">
          <FontAwesomeIcon icon={faTools} />
          <p>Ferreteria</p>
        </Link>
        <Container className="ContainerNavbar">
          <Navbar.Brand className="FormatText">
            <NavLink to="/">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="FormatText">
            <NavLink to="/catalogo">Catalogo</NavLink>
          </Navbar.Brand>
          <NavDropdown title="Categoria" className="FormatText">
            <NavDropdown.Item className="TextDropdown">Electronicos</NavDropdown.Item>
            <NavDropdown.Item className="TextDropdown">Hombres</NavDropdown.Item>
            <NavDropdown.Item className="TextDropdown">Mujer</NavDropdown.Item>
          </NavDropdown>
        </Container>
        <div className="Cart">
          <CartWidget />
        </div>
      </Navbar>
    </ >
  );
};
