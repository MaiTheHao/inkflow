import { memo } from 'react';
import { Link } from 'react-router-dom';

const TattooImage = memo(function TattooImage({
	image,
	route,
	title,
	className = '',
	containerClassName = '',
	withHoverEffect = true,
}) {
	const hoverEffectClass = withHoverEffect
		? 'transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group'
		: '';
	const innerHoverEffectClass = withHoverEffect ? 'transition-transform duration-500 group-hover:scale-110' : '';
	const imageContainerClass = 'overflow-hidden';
	const imageClass = 'w-full h-full object-cover';

	return (
		<Link to={route} className={`relative ${containerClassName} ${imageContainerClass} ${hoverEffectClass}`}>
			<img
				src={image}
				className={`${imageClass} ${innerHoverEffectClass} ${className} group-hover:blur-sm transition-all duration-300`}
				alt={`${title} tattoo`}
			/>

			{/* Tooltip show type */}
			<div className='absolute inset-0 flex flex-col items-center justify-center group-hover:bg-[rgba(0,0,0,0.35)] opacity-0 group-hover:opacity-100 transition-[opacity,background-color] duration-300'>
				<span className='text-(--color-text-header) text-center font-title font-bold text-base'>
					InkFlow&apos;s Art
				</span>
				<p className='text-center text-sm text-[var(--color-text-subtitle)] font-semibold mt-2'>{title}</p>
			</div>
		</Link>
	);
});

export default TattooImage;
