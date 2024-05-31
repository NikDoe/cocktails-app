import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Cocktail, Error, Home, Landing, Newsletter } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/about',
		element: <About />
	}
]);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
