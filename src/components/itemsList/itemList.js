import { Item } from "../item/Item";

export const ItemList = ({ products }) => {
  return (
    <div>
      {products ? (
        products.map((prod) => <Item {...prod} />)
      ) : (
        <p> cargando....</p>
      )}
    </div>
  );
};
