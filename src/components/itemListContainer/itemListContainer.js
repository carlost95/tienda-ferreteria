import { useEffect, useState } from 'react';
import { ItemCount } from '../itemCount/ItemCount';
// import { ItemList } from '../itemsList/itemList';

export const ItemListContainer = ({ greeting }) => {
	const [ products, setProducts ] = useState([]);

	const getProductFetch = async () => {
		const productsApi = await fetch('https://franncode.vercel.app/api/products');
		const productJson = await productsApi.json();
		setProducts(productJson);
	};
	useEffect(() => {
		getProductFetch();
	}, []);


	return (
		<div>
			<h2>{greeting}</h2>
			<ItemCount stock={15} initial={1} />
			{/* <ItemList products={products} /> */}
		</div>
	);
};
