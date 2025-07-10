import { memo } from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = memo(function FeatureCard({
	feature: { image, title, subtitle, description, ...restFeature },
	aspectRatio = [50, 50],
	href,
	onCardClick,
	children,
	className = '',
	style = {},
	...restProps
}) {
	const content = children || (
		<>
			<div className={`h-[${aspectRatio[0]}%] overflow-hidden`}>
				<img
					src={image}
					alt={`Ảnh của ${title}`}
					className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
					loading='lazy'
				/>
			</div>
			<div className={`h-[${aspectRatio[1]}%] p-4 sm:p-6 flex flex-col justify-start`}>
				<header className='mb-3 sm:mb-4'>
					<h3 className='font-bold text-[var(--color-text-header)] text-lg sm:text-xl leading-tight group-hover:text-[var(--color-text-header-hover)] transition-colors duration-300 mb-2'>
						{title}
					</h3>
					<p className='text-[var(--color-text-subtitle)] text-xs group-hover:text-[var(--color-text-subtitle-hover)] transition-colors duration-300 line-clamp-2'>
						{subtitle}
					</p>
				</header>
				<div className='flex-1 overflow-hidden'>
					<p className='text-[var(--color-text-paragraph)] text-xs group-hover:text-[var(--color-text-highlight)] transition-colors duration-300 line-clamp-8'>
						{description}
					</p>
				</div>
			</div>
		</>
	);

	const combinedClassName = [
		'group flex flex-col bg-[var(--color-bg-secondary)] rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[var(--color-bg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2',
		className,
	].join(' ');

	const commonProps = {
		className: combinedClassName,
		style,
		'aria-label': `Xem portfolio của ${title}`,
		...restFeature,
		...restProps,
	};

	if (onCardClick) {
		return (
			<button type='button' onClick={onCardClick} {...commonProps}>
				{content}
			</button>
		);
	}

	return (
		<Link to={href} tabIndex={0} {...commonProps}>
			{content}
		</Link>
	);
});

export default FeatureCard;
