import type { ProductCardProps } from '../types';

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<div>
				<img
					src={product.thumbnail}
					alt={product.title}
				/>
			</div>
			<div>
				<p>{product.title}</p>
				<div>
					<p>${product.price}</p>
					<div>
						<img
							src='/star.svg'
							alt='Star Icon'
						/>
						<p>{product.rating}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
