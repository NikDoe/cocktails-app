import axios from 'axios';
import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import { TFetchCocktail } from '../types';
import Wrapper from '../assets/wrappers/CocktailPage';

const SINGLE_COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader: LoaderFunction = async ({ params }) => {
	const { cocktailId } = params;
	const response = await axios.get(`${SINGLE_COCKTAIL_URL}${cocktailId}`);
	return { cocktailId, cocktail: response.data.drinks[0] };
};

function Cocktails() {
	const { cocktail } = useLoaderData() as TFetchCocktail;
	
	const {
		strDrink: title,
		strDrinkThumb: image,
		strCategory: category,
		strAlcoholic: alcoholic,
		strGlass: glass,
		strInstructions: instructions,
	} = cocktail;

	return (
		<Wrapper>
			<header>
				<Link to='/' className='btn'>back home</Link>
				<h3>{title}</h3>
			</header>
			<div className='drink'>
				<img src={image} alt={title} className='img' />
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name :</span>
						{title}
					</p>
					<p>
						<span className='drink-data'>category :</span>
						{category}
					</p>
					<p>
						<span className='drink-data'>info :</span>
						{alcoholic}
					</p>
					<p>
						<span className='drink-data'>glass :</span>
						{glass}
					</p>
					<p>
						<span className='drink-data'>instructions :</span>
						{instructions}
					</p>
				</div>
			</div>
		</Wrapper>
	);
}

export default Cocktails;
