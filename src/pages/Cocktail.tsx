import axios from 'axios';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { TFetchCocktail } from '../types';

const SINGLE_COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader: LoaderFunction = async ({ params }) => {
	const { cocktailId } = params;
	const response = await axios.get(`${SINGLE_COCKTAIL_URL}${cocktailId}`);
	return { cocktailId, cocktail: response.data.drinks[0] };
};

function Cocktails() {
	const { cocktail } = useLoaderData() as TFetchCocktail;
	console.log(cocktail.strDrink);

	return (
		<h1>Cocktail</h1>
	);
}

export default Cocktails;
