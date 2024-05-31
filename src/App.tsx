import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <h2>Home Page</h2>
	},
	{
		path: '/about',
		element: <h2>About Page</h2>
	}
]);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
