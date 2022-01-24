import { ItemDetail } from "./itemDetailContainer";
export const Item = ({ category, description, image, price, title }) => {
  return (
    <div>
      <ItemDetail />
      <h1>{title}</h1>
      <img src={image} />
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
};
