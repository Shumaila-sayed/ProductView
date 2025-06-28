import type { ProductCardProps } from "../types";

const ProductCard = ({ product }: ProductCardProps) => {
	return <h1>{product.title}</h1>;
};

export default ProductCard;
