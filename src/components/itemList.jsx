import { Item } from "./item";

export const ItemList = ({ products }) => {
  return (
    <div>
      <h2>lista</h2>
      {products ? (
        products.map((prod) => <Item key={prod.id} {...prod} />)
      ) : (
        <p> cargando....</p>
      )}
    </div>
  );
};
