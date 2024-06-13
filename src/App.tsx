import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import SinglePageError from './pages/SinglePageError';
import { About, Cocktail, Error, Layout, Landing, Newsletter } from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		}
	}
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				loader: landingLoader(queryClient),
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
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} position='right' buttonPosition='bottom-left' />
		</QueryClientProvider>
	);
}

export default App;
