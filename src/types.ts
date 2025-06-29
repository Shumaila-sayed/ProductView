export type Product = {
	id: number;
	title: string;
	price: number;
    thumbnail: string;
    rating: number;
};

export type ProductCardProps = {
	product: Product;
};