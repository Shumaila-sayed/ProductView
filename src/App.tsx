import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Catalogue from './pages/catalogue';
import ProtectedRoutes from './utils/ProtectedRoutes';
import { useState } from 'react';

const App = () => {
	const [isLogged, setIsLogged] = useState(false);
	return (
		<>
			<Routes>
				<Route
					path='/login'
					element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
				/>
				<Route element={<ProtectedRoutes user={isLogged} />}>
					<Route
						path='/catalogue'
						element={<Catalogue />}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default App;
