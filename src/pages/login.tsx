import Form from "../Components/Form";

const Login = () => {
	return (
		<div className=' flex flex-col items-center h-screen md:flex-row'>
			<div className='max-w-fit bg-linear-to-b from-green-600 to-red-500 md:self-stretch flex justify-center items-center md:min-w-2xl p-5'>
				<img
					className='h-60 md:h-110 md:w-180 '
					src='/Shopping.png'
					alt='Shopping'
				/>
			</div>

			<div className='flex-1 '>
				<Form />
			</div>
		</div>
	);
};

export default Login;
