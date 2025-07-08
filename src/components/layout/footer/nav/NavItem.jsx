import { Link } from 'react-router-dom';

function NavItem({ to, children, isActive, className = '' }) {
	return (
		<li>
			<Link
				to={to}
				className={`
                hover:underline
                text-[var(--color-text-subtitle)]
				text-xs sm:text-sm
                transition-colors
                duration-150
                hover:text-[var(--color-text-subtitle-hover)]
                ${isActive ? 'underline text-[var(--color-text-header)]' : ''}
                underline-offset-4
                transition-[text-decoration-color,text-decoration-thickness]
                block
                ${className}
            `}
				aria-current={isActive ? 'page' : undefined}
			>
				{children}
			</Link>
		</li>
	);
}

export default NavItem;
