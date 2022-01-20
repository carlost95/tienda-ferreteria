import { Item } from "../item/item";

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
