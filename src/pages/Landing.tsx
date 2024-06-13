import axios from 'axios';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { TFetchDrinks } from '../types';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { QueryClient, useQuery } from '@tanstack/react-query';

const COCKTAILS_DB_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchTerm: string) => {
	return {
		queryKey: ['search', searchTerm || 'all'],
		queryFn: async () => {
			const response = await axios.get(`${COCKTAILS_DB_URL}${searchTerm}`);
			return response.data.drinks;
		},
	};
};

export const loader = (queryClient: QueryClient) => async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	
	const searchTerm = url.searchParams.get('search') || '';

	await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
	
	return { searchTerm };
};

function Landing() {
	const { searchTerm } = useLoaderData() as TFetchDrinks;
	const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
	
	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} />
		</>
	);
}

export default Landing;
