import type { HeaderProps } from "../types";

const Header = ({setSearchText }: HeaderProps) => {
	return (
		<>
			<h1 className='text-center md:text-3xl text-2xl font-semibold mt-3 font-mono'>
				Product Viewer
			</h1>
			<div className='text-center m-4'>
				<input
					type='search'
					name='search'
					id='search'
					className='border-gray-800 border-2 rounded-xl min-h-4 min-w-[15em] md:min-w-[25em] px-2 py-2 placeholder:text-[14px]'
					placeholder='Search for products...'
					onChange={(e) => {
						setSearchText(e.target.value.toLowerCase());
					}}
				/>
			</div>
		</>
	);
};

export default Header;
