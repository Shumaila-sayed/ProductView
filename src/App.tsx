import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Catalogue from './pages/catalogue';
import ProtectedRoutes from './utils/ProtectedRoutes';

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route element={<ProtectedRoutes />}>
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
