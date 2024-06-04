import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Cocktail, Error, Layout, Landing, Newsletter } from './pages';
import SinglePageError from './pages/SinglePageError';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';

import { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				loader: landingLoader,
				errorElement: <SinglePageError />,
				element: <Landing />
			},
			{
				path: '/cocktail/:cocktailId',
				loader: singleCocktailLoader,
				errorElement: <SinglePageError />,
				element: <Cocktail />
			},
			{
				path: '/newsletter',
				action: newsletterAction,
				element: <Newsletter />
			},
			{
				path: '/about',
				element: <About />
			}
		],
	},
]);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
