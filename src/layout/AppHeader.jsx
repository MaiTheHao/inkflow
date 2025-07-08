import React, { memo, useMemo, useState } from 'react';
import Logo from '/logo/logo-24x24.svg';
import NavBar from '../components/layout/header/nav/NavBar';
import { Link } from 'react-router-dom';
import { ROUTES } from '../const/routes';

const AppHeader = memo(function AppHeader() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const leftLinks = useMemo(
		() => [
			{ to: ROUTES.TRANG_CHU.href, label: ROUTES.TRANG_CHU.label },
			{ to: ROUTES.GIOI_THIEU.href, label: ROUTES.GIOI_THIEU.label },
			{ to: ROUTES.PORTFOLIO.ROOT.href, label: ROUTES.PORTFOLIO.ROOT.label },
			{ to: ROUTES.BLOG.ROOT.href, label: ROUTES.BLOG.ROOT.label },
		],
		[]
	);

	const rightLinks = useMemo(
		() => [
			{ to: ROUTES.PORTFOLIO.NGHE_SI().href, label: ROUTES.PORTFOLIO.NGHE_SI().label },
			{ to: ROUTES.LIEN_HE.href, label: ROUTES.LIEN_HE.label },
			{ to: ROUTES.DAT_LICH.href, label: ROUTES.DAT_LICH.label },
			{ to: ROUTES.FAQ.href, label: ROUTES.FAQ.label },
		],
		[]
	);

	const allLinks = useMemo(() => [...leftLinks, ...rightLinks], [leftLinks, rightLinks]);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className='bg-[var(--color-bg)] sticky top-0 z-50 shadow-lg'>
			<div className='w-full px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-row justify-between items-center h-16 sm:h-20 max-w-[1200px] mx-auto'>
					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className='lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 text-[var(--color-text-primary)] hover:text-[var(--color-text-hover)] transition-colors duration-200'
						aria-label='Toggle mobile menu'
					>
						<span
							className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${
								isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${
								isMobileMenuOpen ? 'opacity-0' : ''
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${
								isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
							}`}
						></span>
					</button>

					{/* Left Navigation - Desktop */}
					<div className='hidden lg:block'>
						<NavBar links={leftLinks} />
					</div>

					{/* Logo - Center */}
					<div className='flex-1 lg:flex-none flex justify-center lg:justify-center'>
						<Link
							to={ROUTES.TRANG_CHU.href}
							className='transition-transform duration-200 hover:scale-110'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<img src={Logo} alt='Inkflow Logo' className='h-12 sm:h-16 w-auto max-w-none' />
						</Link>
					</div>

					{/* Right Navigation - Desktop */}
					<div className='hidden lg:block'>
						<NavBar links={rightLinks} />
					</div>

					{/* CTA Button - Mobile/Tablet */}
					<div className='lg:hidden'>
						<Link
							to={ROUTES.DAT_LICH.href}
							className='bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-text-primary)] px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Đặt lịch
						</Link>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden transition-all duration-300 ease-in-out ${
						isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
					} overflow-hidden`}
				>
					<div className='py-4 flex flex-col gap-2 border-t border-[var(--color-bg-secondary)] max-h-80 overflow-y-auto modal-scrollbar'>
						{allLinks.map((link, index) => (
							<Link
								key={index}
								to={link.to}
								className='block px-4 py-3 text-[var(--color-text-primary)] hover:text-[var(--color-text-hover)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-200 rounded-md'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</header>
	);
});

export default AppHeader;
