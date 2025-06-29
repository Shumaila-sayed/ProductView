import { useEffect, useState } from 'react';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import Spinner from '../Components/Spinner';
import type { Product } from '../types';
const baseUrl = import.meta.env.VITE_BASE_URL_PRODUCTS;

const Catalogue = () => {
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [searchText, setSearchText] = useState("");
	const [productList, setProductList] = useState<Product[]>([]);

	const fetchProducts = async () => {
		setIsLoading(true);
		setErrorMessage('');

		try {
			const response = await fetch(baseUrl);

			if (!response.ok) {
				throw new Error('Failed to fetch products');
			}

			const data = await response.json();
			
			if (data.Response === 'False') {
				setErrorMessage(data.Error || 'Failed to fetch products.');
				setProductList([]);
				return;
			}

			if (data.products) {
				console.log(data);
				setAllProducts(data.products);
				setProductList(data.products);
				setIsLoading(false);
			}
		} catch (error) {
			console.error(`Error fetching products: ${error}`);
			setErrorMessage('Error fetching products. Please try again later.');
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		const newProducts = allProducts.filter((product) => {
			return product.title.toLowerCase().includes(searchText);
		});
		console.log(newProducts);
		
		setProductList(newProducts);
	}, [searchText])


	return (
		<>
			<Header
				setSearchText={setSearchText}
			/>
			<div>
				<h1>Discover Your Style</h1>
				{isLoading ? (
					<Spinner />
				) : errorMessage ? (
					<p>{errorMessage}</p>
				) : (
					<div>
						{productList.map((product) => (
							<ProductCard
								product={product}
								key={product.id}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Catalogue;
