import type { ProductCardProps } from '../types';

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className='p-2'>
			<div className='bg-gray-200 rounded-2xl'>
				<img
					src={product.thumbnail}
					alt={product.title}
				/>
			</div>
			<div className='mt-3 px-1 '>
				<p className='font-semibold'>{product.title}</p>
				<div className='flex justify-between mt-1'>
					<p>$ {product.price}</p>
					<div className='flex gap-2'>
						<img
							src='/star.svg'
							alt='Star Icon'
						/>
						<p>{product.rating}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
