import { memo } from 'react';
import { Link } from 'react-router-dom';

const MultiImageBlock = memo(function MultiImageBlock({ type, allImages, imageIndices, linkTo, className = '' }) {
	const hoverEffectClass = 'transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group';
	const innerHoverEffectClass = 'transition-transform duration-500 group-hover:scale-110';
	const imageContainerClass = 'overflow-hidden';
	const imageClass = 'w-full h-full object-cover';

	const layoutClass =
		type === 'vertical'
			? 'aspect-square flex flex-col gap-1 w-full h-max'
			: 'aspect-square flex flex-row gap-1 w-full h-max';

	return (
		<Link to={linkTo} className={`relative ${layoutClass} ${hoverEffectClass} ${className}`}>
			{imageIndices.map((imageIndex, idx) => (
				<div
					key={idx}
					className={`flex-1 flex flex-row justify-center items-center relative ${imageContainerClass}`}
				>
					<img
						src={allImages[imageIndex]?.image}
						className={`${imageClass} ${innerHoverEffectClass} group-hover:blur-sm transition-all duration-300`}
						alt={`${allImages[imageIndex]?.title} tattoo`}
					/>
				</div>
			))}
			<div className='absolute inset-0 flex flex-col items-center justify-center group-hover:bg-[rgba(0,0,0,0.35)] opacity-0 group-hover:opacity-100 transition-[opacity,background-color] duration-300'>
				<span className='text-(--color-text-header) text-center font-title font-bold text-base'>
					InkFlow's Art
				</span>
				<p className='text-center text-sm text-[var(--color-text-subtitle)] font-semibold mt-2'>
					{allImages[0].title}
				</p>
			</div>
		</Link>
	);
});

export default MultiImageBlock;
