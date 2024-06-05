import axios from 'axios';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { TFetchDrinks } from '../types';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const COCKTAILS_DB_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	
	const searchTerm = url.searchParams.get('search') || '';
	const response = await axios.get(`${COCKTAILS_DB_URL}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
	const { drinks, searchTerm } = useLoaderData() as TFetchDrinks;
	
	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} />
		</>
	);
}

export default Landing;
