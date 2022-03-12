import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ id, image, price, title }) => {
  return (
    <Link to={`/`} className="card">
      <div key={id}>
        <div className="card__contenedorImagen">
          <img alt={title} src={image}></img>
        </div>
        <div className="card__body">
          <p className="card__parrafo">{title}</p>
          <p className="card__parrafo--price">${price}</p>
        </div>
      </div>
    </Link>
  );
};
