import { useState } from "react";
import { Swal } from 'sweetalert2'


export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onDecrease = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };
  const onIncrease = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    const message = `Agregaste ${count} producto`;
    count === 1 ? (Swal.fire({
      icon: "info",
      title: "No se encontro producto seleccionado",
      text: "Quieres Volver al Catalog de Productos",
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false

    })) : (
      Swal.fire({
        icon: "error",
        title: "A ocurrido un error",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false

      }))
    // alert(message) : alert(`${message}s`);
  };
  return (
    <div>
      <h1>Contador</h1>
      <div>
        <button onClick={onDecrease}>-</button>
        <h3>{count}</h3>
        <button onClick={onIncrease}>+</button>
      </div>
      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
};
