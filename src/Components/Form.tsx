import { NavLink } from 'react-router-dom';

const Form = () => {
	return (
		<>
			<h1 className='text-2xl text-center md:mt-[-50px] mt-12 mb-6 font-mono'>
				Log in to View our{' '}
				<span className='decoration-emerald-400 underline'>Products!</span>
			</h1>
			<form className='flex flex-col gap-1.5 m-auto max-w-60'>
				<label htmlFor='user'>
					<span className='text-red-500'>*</span> Name
				</label>

				<input
					type='text'
					name='user'
					id='user'
					placeholder='Enter your username'
					className='bg-gray-100 rounded-sm px-2 py-1.5 mb-2 placeholder:text-[14px]'
				/>

				<label htmlFor='pwd'>
					<span className='text-red-500'>*</span> Password
				</label>

				<input
					type='password'
					name='pwd'
					id='pwd'
					placeholder='Enter your password'
					className='bg-gray-100 rounded-sm px-2 py-1.5 placeholder:text-[14px]'
				/>
				<p className='text-[12px]'>
					<span className='text-red-500'>* Indicates required Field</span>
				</p>
				<NavLink
					to='/catalogue'
					className='bg-green-600  text-gray-50 font-semibold rounded-xl px-10 py-1.5 mt-2 text-center cursor-pointer hover:bg-green-700'
				>
					<button>Login</button>
				</NavLink>
			</form>
		</>
	);
};

export default Form;
