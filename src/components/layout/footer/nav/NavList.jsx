import React from 'react';
import NavItem from './NavItem';

function NavList({ title, items, className = '' }) {
	return (
		<div className={`flex flex-col items-start gap-3 w-full lg:w-max ${className}`}>
			<span className='text-[var(--color-text-header)] text-sm sm:text-base font-semibold'>{title}</span>
			<nav className='w-full'>
				<ul className='flex flex-col gap-2 w-full'>
					{items.map(({ to, label, isActive }, idx) => (
						<NavItem key={`${to}${idx}`} to={to} isActive={isActive}>
							{label}
						</NavItem>
					))}
				</ul>
			</nav>
		</div>
	);
}

export default NavList;
