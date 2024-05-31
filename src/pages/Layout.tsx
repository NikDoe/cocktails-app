import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div>
			<nav>navbar</nav>
			<Outlet />
		</div>
	);
}

export default Layout;
