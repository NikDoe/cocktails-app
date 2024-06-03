import { Link, useRouteError } from 'react-router-dom';

import Wrapper from '../assets/wrappers/ErrorPage';

import img from '../assets/not-found.svg';

type GlobalErrorResponse = {
  status: number;
  statusText: string;
  message?: string;
};

function Error() {
	const error = useRouteError() as GlobalErrorResponse;
	console.log(error);

	if(error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt='not found' />
					<h3>О нет!</h3>
					<p>Мы не смогли найти страницу которую вы ищите</p>
					<Link to='/'>вернуться на главную</Link>
				</div>
			</Wrapper>
		);
	}
	
	return (
		<Wrapper>
			<h1>Что-то пошло не так...🤔</h1>
		</Wrapper>
	);
}

export default Error;
