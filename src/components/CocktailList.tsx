import Wrapper from '../assets/wrappers/CocktailList';
import { TDrink } from '../types';
import SingleCocktail from './SingleCocktail';

type Props = {
    drinks: TDrink[];
}

function CocktailList({ drinks }: Props) {
	if(!drinks) {
		return <h4>Коктейли не найдены</h4>;
	}

	const formatedDrinks = drinks.map(item => {
		const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } = item;
		return {
			id: idDrink,
			alcoholic: strAlcoholic,
			title: strDrink,
			image: strDrinkThumb,
			glass: strGlass,
		};
	});

	return (
		<Wrapper>
			{formatedDrinks.map(item => <SingleCocktail key={item.id} {...item} />)}
		</Wrapper>
	);
}

export default CocktailList;
