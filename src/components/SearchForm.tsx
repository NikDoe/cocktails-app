import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

type Props = {
    searchTerm: string;
}

function SearchForm({ searchTerm }: Props) {
	const { state } = useNavigation();
	const isSubmitting = state === 'submitting';
    
	return (
		<Wrapper>
			<Form className='form'>
				<input
					type='search'
					name='search'
					className='form-input'
					defaultValue={searchTerm}
				/>
				<button type='submit' className='btn' disabled={isSubmitting}>
					{isSubmitting ? 'searching...' : 'search'}
				</button>
			</Form>
		</Wrapper>
	);
}

export default SearchForm;
