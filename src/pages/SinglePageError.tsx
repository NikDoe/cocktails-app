import { useRouteError } from 'react-router-dom';

type ErrorResponse = {
  message?: string;
};

function SinglePageError() {
	const error = useRouteError() as ErrorResponse;

	return (
		<h2>
			{error.message}
		</h2>
	);
}

export default SinglePageError;
