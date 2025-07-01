import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import type { LoginProps } from '../types';
const baseUrl = import.meta.env.VITE_BASE_URL_USER;

const Form = ({isLogged, setIsLogged}: LoginProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const fetchUser = async () => {
		try {
			const response = await fetch(baseUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: username,
					password: password,
					expiresInMins: 30,
				}),
			});

			const data = await response.json();
			console.log(data);
			if (data.message) {
				toast.error(data.message);
				return;
			}
			setIsLogged(true);
		} catch (error) {
			console.log(`Error fetching user ${error}`);
			toast.error('Error Logging In');
		}
	};

	useEffect(() => {
		if (isLogged) {
			navigate('/catalogue');
		}
	}, [isLogged]);

	const proceedLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validate()) {
			fetchUser();
		}
	};

	const validate = () => {
		let result = true;
		if (username === '' || username === null) {
			result = false;
			toast.warning('Please Enter Username');
		}
		if (password === '' || password === null) {
			result = false;
			toast.warning('Please Enter Password');
		}

		return result;
	};

	return (
		<>
			<h1 className='text-2xl text-center md:mt-[-50px] mt-12 mb-6 font-mono'>
				Log in to View our{' '}
				<span className='decoration-emerald-400 underline'>Products!</span>
			</h1>
			<form
				onSubmit={proceedLogin}
				className='flex flex-col gap-1.5 m-auto max-w-60'
			>
				<label htmlFor='user'>
					<span className='text-red-500'>*</span> Name
				</label>

				<input
					type='text'
					name='user'
					id='user'
					placeholder='Enter your username'
					className='bg-gray-100 rounded-sm px-2 py-1.5 mb-2 placeholder:text-[14px]'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
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
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className='text-[12px]'>
					<span className='text-red-500'>* Indicates required Field</span>
				</p>

				<button
					type='submit'
					className='bg-green-600  text-gray-50 font-semibold rounded-xl px-10 py-1.5 mt-2 text-center cursor-pointer hover:bg-green-700'
				>
					Login
				</button>
				<ToastContainer />
			</form>
		</>
	);
};

export default Form;
