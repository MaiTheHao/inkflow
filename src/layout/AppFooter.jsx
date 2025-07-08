import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ListNav from '../components/layout/footer/nav/ListNav';
import { ROUTES } from '../const/routes';
import Logo from '/logo/logo-24x24.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_MEDIA_LINKS } from '../const/info';

function AppFooter() {
	return (
		<footer className='bg-[var(--color-bg)] w-full mt-auto'>
			<div className='w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
				<div className='max-w-[1200px] mx-auto'>
					{/* Footer Content */}
					<div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16'>
						{/* Logo & Description */}
						<div className='flex flex-col justify-center items-center gap-4 w-full lg:w-auto lg:max-w-[300px] text-center'>
							<img src={Logo} alt='Inkflow Logo' className='h-16 sm:h-20 lg:h-24' />
							<p className='text-[var(--color-text-paragraph)] text-sm sm:text-base leading-relaxed'>
								Inkflow - Tiệm xăm nghệ thuật sáng tạo & an toàn tại địa phương.
							</p>

							{/* Social Media Icons */}
							<ul className='flex flex-row gap-4 sm:gap-6 items-center justify-center'>
								{[
									{ icon: faFacebookF, href: SOCIAL_MEDIA_LINKS.FACEBOOK },
									{ icon: faInstagram, href: SOCIAL_MEDIA_LINKS.INSTAGRAM },
									{ icon: faLinkedinIn, href: SOCIAL_MEDIA_LINKS.LINKEDIN },
									{ icon: faYoutube, href: SOCIAL_MEDIA_LINKS.YOUTUBE },
								].map(({ icon, href }, idx) => (
									<li key={idx}>
										<Link
											to={href}
											className='group flex justify-center items-center w-10 sm:w-12 aspect-square text-[var(--color-text-primary)] border border-[var(--color-text-primary)] rounded-sm transition-all duration-200 hover:scale-110 hover:text-[var(--color-text-hover)] hover:border-[var(--color-text-hover)]'
											aria-label={`Follow us on ${icon.iconName}`}
										>
											<FontAwesomeIcon
												size='1x'
												icon={icon}
												className='transition-transform duration-200 group-hover:rotate-12'
											/>
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Navigation Links */}
						<div className='flex-1 w-full lg:w-auto'>
							<div className='block lg:hidden mb-6'>
								<div className='w-full h-px bg-[var(--color-bg-secondary)]'></div>
							</div>
							<ListNav />
						</div>
					</div>

					{/* Footer Bottom */}
					<div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[var(--color-bg-secondary)]'>
						{/* Copyright */}
						<div className='text-center sm:text-left'>
							<span className='text-[var(--color-text-header)] text-xs sm:text-sm'>
								Copyright &copy; {new Date().getFullYear()} <strong>Inkflow</strong>. All rights
								reserved.
							</span>
						</div>

						{/* Legal Links */}
						<div className='flex flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[var(--color-text-header)]'>
							<Link
								to={ROUTES.LEGAL.TERMS.href}
								className='underline text-center underline-offset-2 hover:text-[var(--color-text-hover)] transition-colors duration-200'
							>
								Điều khoản dịch vụ
							</Link>
							<span className='text-[var(--color-text-muted)]'>|</span>
							<Link
								to={ROUTES.LEGAL.PRIVACY.href}
								className='underline text-center underline-offset-2 hover:text-[var(--color-text-hover)] transition-colors duration-200'
							>
								Chính sách bảo mật
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;
