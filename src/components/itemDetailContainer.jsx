import { useState, useEffect } from "react";
import { ItemDetail } from "./itemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    const getProductFetchId = async () => {
        const productId = await fetch("https://fakestoreapi.com/products/1");
        const productIdJson = await productId.json();
        setItem(productIdJson);
    };
    useEffect(() => {
        getProductFetchId();
    }, []);
    return (
        <div>
            <h2>Detalle de Item</h2>
            <ItemDetail item={item} />
        </div>
    )
}