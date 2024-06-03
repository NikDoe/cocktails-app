import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const cocktailsDBUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
	const searchTerm = 'vodka';
	const response = await axios.get(`${cocktailsDBUrl}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
	const data = useLoaderData();
	
	return (
		<h1>Landing</h1>
	);
}

export default Landing;
