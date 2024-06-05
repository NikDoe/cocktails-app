import axios from 'axios';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { TFetchDrinks } from '../types';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';

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

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	
	const searchTerm = url.searchParams.get('search') || '';
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
