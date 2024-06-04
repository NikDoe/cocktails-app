import axios from 'axios';
import { ActionFunction, Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const API_URL = 'https://www.course-api.com/cocktails-newsletter';

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	
	try {
		const response = await axios.post(API_URL, data);
		toast.success(response.data.msg);
		return redirect('/');
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response?.data?.msg || 'Произошла ошибка...🤔');
		} else {
			toast.error('🔴Произошла неизвестная ошибка🔴');
		}
		return error;
	}
};

function Newsletter() {
	const { state } = useNavigation();
	const isSubmitting = state === 'submitting';

	return (
		<Form className='form' method='POST'>
			<h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
			</h4>
			{/* name */}
			<div className='form-row'>
				<label htmlFor='name' className='form-label'>
					name
				</label>
				<input
					type='text'
					className='form-input'
					name='name'
					id='name'
					required
				/>
			</div>
			{/* lastName */}
			<div className='form-row'>
				<label htmlFor='lastName' className='form-label'>
					last name
				</label>
				<input
					type='text'
					className='form-input'
					name='lastName'
					id='lastName'
					required
				/>
			</div>
			{/* email */}
			<div className='form-row'>
				<label htmlFor='email' className='form-label'>
					email
				</label>
				<input
					type='text'
					className='form-input'
					name='email'
					id='email'
					defaultValue='test@test.com'
					required
				/>
			</div>
			<button
				type='submit'
				className='btn btn-block'
				style={{ marginTop: '0.5rem' }}
				disabled={isSubmitting}
			>
				{isSubmitting ? 'submitting' : 'submitt'}
			</button>
		</Form>
	);
}

export default Newsletter;
