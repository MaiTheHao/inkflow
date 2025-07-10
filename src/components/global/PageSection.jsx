import { memo } from 'react';

const PageSection = memo(function PageSection({
	title,
	description,
	children,
	maxWidth = 1200,
	className = '',
	style = {},
}) {
	return (
		<section
			className={`w-full flex flex-col items-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-4 ${className}`}
			style={style}
		>
			<div
				className={`w-full ${
					maxWidth ? `max-w-[${maxWidth}px]` : ''
				} flex flex-col items-center gap-6 sm:gap-8 lg:gap-10`}
			>
				<div className='flex flex-col items-center gap-2 text-center'>
					{title && (
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-header)] text-center'>
							{title}
						</h2>
					)}
					{description && (
						<p className='text-[var(--color-text-subtitle)] text-center w-full max-w-[520px] text-sm'>
							{description}
						</p>
					)}
				</div>
				{children}
			</div>
		</section>
	);
});

export default PageSection;
