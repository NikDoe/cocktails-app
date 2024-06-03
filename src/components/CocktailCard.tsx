import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

import { TFormatedDrink } from '../types';

function CocktailCard({ title, image, alcoholic, id, glass }: TFormatedDrink) {
	return (
		<Wrapper>
			<div className='img-container'>
				<img src={image} alt={title} className='img' />
			</div>
			<div className='footer'>
				<h4>{title}</h4>
				<h5>{glass}</h5>
				<p>{alcoholic}</p>
				<Link to={`/cocktail/${id}`} className='btn'>
					details
				</Link>
			</div>
		</Wrapper>
	);
}

export default CocktailCard;
