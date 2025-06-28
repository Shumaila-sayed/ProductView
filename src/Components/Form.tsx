const Form = () => {
	return (
		<div className='max-w-min m-auto p-3'>
			<form className='flex flex-col'>
				<label htmlFor='user'>
					Name:
					<input
						type='text'
						name='user'
						id='user'
						className='border-gray-800 border-2 rounded-sm'
					/>
				</label>
				<label htmlFor='pwd'>
					Password:
					<input
						type='password'
						name='pwd'
						id='pwd'
						className='border-gray-800 border-2 rounded-sm'
					/>
				</label>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Form;
