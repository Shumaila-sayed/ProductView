import type { HeaderProps } from "../types";

const Header = ({setSearchText }: HeaderProps) => {
	return (
		<div>
			<h1>Product Viewer</h1>
			<div className='flex p-6 justify-between'>
				<input
					type='search'
					name='search'
					id='search'
					className='border-gray-800 border-2 rounded-md min-h-4 min-w-[12em] px-2 py-2'
					placeholder='Search for products'
					onChange={(e) => {
						setSearchText(e.target.value.toLowerCase())
					}}
				/>
				<span title='Logout'>
					{/* <img
					src=''
					alt=''
				/> */}
					icon
				</span>
			</div>
		</div>
	);
};

export default Header;
