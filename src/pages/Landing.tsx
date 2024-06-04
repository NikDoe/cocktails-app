import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { TFetchDrinks } from '../types';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const COCKTAILS_DB_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
	const searchTerm = '';
	const response = await axios.get(`${COCKTAILS_DB_URL}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
	const { drinks } = useLoaderData() as TFetchDrinks;
	
	return (
		<>
			<SearchForm />
			<CocktailList drinks={drinks} />
		</>
	);
}

export default Landing;
