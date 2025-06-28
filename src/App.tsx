import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Catalogue from './pages/catalogue';

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Login />}
				/>
				<Route
					path='/catalogue'
					element={<Catalogue />}
				/>
			</Routes>
		</>
	);
};

export default App;
