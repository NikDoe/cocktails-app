import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

function SearchForm() {
	const { state } = useNavigation();
	const isSubmitting = state === 'submitting';
    
	return (
		<Wrapper>
			<Form className='form'>
				<input
					type='search'
					name='search'
					className='form-input'
					defaultValue='vodka'
				/>
				<button type='submit' className='btn' disabled={isSubmitting}>
					{isSubmitting ? 'searching...' : 'search'}
				</button>
			</Form>
		</Wrapper>
	);
}

export default SearchForm;
