import { Item } from "./item";

export const ItemList = ({ products }) => {
  return (
    <div>
      {products ? (
        products.map((prod) => <Item key={prod.id} {...prod} />)
      ) : (
        <p> cargando....</p>
      )}
    </div>
  );
};
