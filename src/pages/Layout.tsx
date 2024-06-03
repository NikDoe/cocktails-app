import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
	const { state: navigationState } = useNavigation();

	return (
		<div>
			<Navbar />
			<section className='page'>
				{navigationState === 'loading' && <div>Загрузка...</div>}
				{navigationState === 'idle' && <Outlet />}
			</section>
		</div>
	);
}

export default Layout;
