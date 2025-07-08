import { useLocation } from 'react-router-dom';
import NavList from './NavList';
import NavItem from './NavItem';
import { ROUTES } from '../../../../const/routes';
import { isActiveLink } from '../../../../utils/route.util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const navSections = [
	{
		title: 'Inkflow',
		items: [
			{ to: ROUTES.COMPANY.ABOUT.href, label: ROUTES.COMPANY.ABOUT.label },
			{ to: ROUTES.COMPANY.JOBS.href, label: ROUTES.COMPANY.JOBS.label },
			{ to: ROUTES.LIEN_HE.href, label: ROUTES.LIEN_HE.label },
		],
	},
	{
		title: 'Tài nguyên',
		items: [
			{ to: ROUTES.COMPANY.BLOG.href, label: ROUTES.COMPANY.BLOG.label },
			{ to: ROUTES.FAQ.href, label: ROUTES.FAQ.label },
			{ to: ROUTES.SUPPORT.GUIDES.href, label: ROUTES.SUPPORT.GUIDES.label },
		],
	},

	{
		title: ROUTES.LEGAL.label,
		items: [
			{ to: ROUTES.LEGAL.TERMS.href, label: ROUTES.LEGAL.TERMS.label },
			{ to: ROUTES.LEGAL.PRIVACY.href, label: ROUTES.LEGAL.PRIVACY.label },
		],
	},
	{
		title: ROUTES.SOLUTION.label,
		items: [
			{ to: ROUTES.SOLUTION.MARKETING.href, label: ROUTES.SOLUTION.MARKETING.label },
			{ to: ROUTES.SOLUTION.ANALYTICS.href, label: ROUTES.SOLUTION.ANALYTICS.label },
			{ to: ROUTES.SOLUTION.COMMERCE.href, label: ROUTES.SOLUTION.COMMERCE.label },
			{ to: ROUTES.SOLUTION.INSIGHTS.href, label: ROUTES.SOLUTION.INSIGHTS.label },
		],
	},
];

function ListNav() {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div className='w-full'>
			{/* Mobile Layout - Accordion Style */}
			<div className='block sm:hidden'>
				{navSections.map((section, idx) => (
					<details key={`${section.title}-mobile-${idx}`} className='group'>
						<summary
							className={`flex flex-row justify-between items-center cursor-pointer text-[var(--color-text-header)] font-medium text-base py-2 ${
								idx < navSections.length - 1 ? 'border-b border-[var(--color-bg-secondary)]' : ''
							}`}
						>
							{section.title}
							<span className='transition-transform duration-200 group-open:rotate-180'>
								<FontAwesomeIcon icon={faChevronDown} />
							</span>
						</summary>
						<div className='pl-4 flex flex-col gap-2 my-2'>
							{section.items.map((item, itemIdx) => (
								<div key={`${item.to}-${itemIdx}`}>
									<NavItem
										to={item.to}
										isActive={isActiveLink(item.to, currentPath)}
										className='text-sm block py-1'
									>
										{item.label}
									</NavItem>
								</div>
							))}
						</div>
					</details>
				))}
			</div>
			{/* Tablet Layout - 2x2 Grid */}
			<div className='hidden sm:block lg:hidden'>
				<div className='grid grid-cols-2 gap-8'>
					{navSections.map((section, idx) => (
						<NavList
							key={`${section.title}-tablet-${idx}`}
							title={section.title}
							items={section.items.map((item) => ({
								...item,
								isActive: isActiveLink(item.to, currentPath),
							}))}
						/>
					))}
				</div>
			</div>
			{/* Desktop Layout - Horizontal */}
			<div className='hidden lg:block'>
				<div className='flex flex-row justify-between items-start w-full gap-8'>
					{navSections.map((section, idx) => (
						<NavList
							key={`${section.title}-desktop-${idx}`}
							title={section.title}
							items={section.items.map((item) => ({
								...item,
								isActive: isActiveLink(item.to, currentPath),
							}))}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default ListNav;
