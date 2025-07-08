import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import { isActiveLink } from '../../../../utils/route.util';

function NavBar({ links, className = '' }) {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<nav className={className}>
			<ul className='flex flex-row gap-4 lg:gap-6 xl:gap-8'>
				{links.map((link) => (
					<NavItem key={link.to} to={link.to} isActive={isActiveLink(link.to, currentPath)}>
						{link.label}
					</NavItem>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
