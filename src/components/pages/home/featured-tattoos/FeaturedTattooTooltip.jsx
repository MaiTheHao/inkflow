import { Link } from 'react-router-dom';

const FeaturedTattooTooltip = ({ to, type, children, className }) => {
	return (
		<Link className={`${className || ''} relative group`} to={to}>
			{children}

			<div className='absolute top-0 left-0 bottom-0 right-0 flex flex-row items-center justify-center backdrop-blur-sm bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
				<div className='text-center bg-(--color-primary) w-full px-4 py-2'>
					<div className='font-title text-[var(--color-text-header)] text-sm font-semibold'>
						InkFlow's Art
					</div>
					<div className='font-body text-[var(--color-text-subtitle)] text-xs mt-1'>
						{type?.toUpperCase()}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default FeaturedTattooTooltip;
