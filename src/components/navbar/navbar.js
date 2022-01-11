import { CartWidget } from "../cartWidget/cartWidget";

export const NavBar = () => {
    return (
      <nav className="navBar">
        <CartWidget/>
        <p>Ferrerteria Josecito</p>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">productos</a>
          </li>
          <li>
            <a href="#">servicios </a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    );
};