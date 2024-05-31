import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
	return (
		<div>
			<Navbar />
			<section className='page'>
				<Outlet />
			</section>
		</div>
	);
}

export default Layout;
