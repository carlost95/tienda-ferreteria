import { Item } from "../item/item";

export const ItemList = ({ products }) => {

  return (
    <>
      <h1 className="Titulo">Ferreteria</h1>
      {products ? (
        products.map((prod) => <Item key={prod.id} {...prod} />)
      ) : (
        <p> cargando....</p>
      )}
    </>
  );
};
