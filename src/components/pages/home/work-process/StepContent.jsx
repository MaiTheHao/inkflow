import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function StepContent({ currentStep }) {
	return (
		<div className='grid grid-cols-1 xl:grid-cols-2 gap-0 items-stretch border-2 border-[var(--color-bg-accent)] rounded-2xl overflow-hidden'>
			<div className='flex flex-col gap-6 md:gap-8 px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10'>
				<div className='flex flex-col gap-3 md:gap-4'>
					<h3 className='text-2xl md:text-3xl xl:text-4xl font-bold text-[var(--color-text-header)] font-title leading-tight'>
						{currentStep.title}
					</h3>
					<p className='text-[var(--color-text-paragraph)] leading-relaxed text-sm md:text-base'>
						{currentStep.description}
					</p>
				</div>

				{currentStep.quote && (
					<div className='border-b-2 border-[var(--color-bg-highlight)] pb-4 md:pb-6'>
						<div className='flex flex-row gap-3 md:gap-5 items-start'>
							<div className='text-[var(--color-text-primary)] text-xl md:text-4xl lg:text-5xl font-bold leading-none flex-shrink-0'>
								<FontAwesomeIcon icon={faQuoteLeft} />
							</div>
							<div className='flex-1 flex flex-col gap-3 md:gap-4 pt-2 md:pt-4 lg:pt-6'>
								<blockquote className='text-[var(--color-text-secondary)] italic leading-relaxed text-xs md:text-base'>
									{currentStep.quote}
								</blockquote>
								<div className='flex flex-col gap-1 pt-1 md:pt-2'>
									<cite className='text-[var(--color-text-header)] font-bold text-sm md:text-base not-italic'>
										{currentStep.author}
									</cite>
									<span className='text-[var(--color-text-muted)] text-xs md:text-sm font-medium italic'>
										{currentStep.role}
									</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			<div className='flex flex-col h-full min-h-[250px] md:min-h-[300px] xl:min-h-[400px]'>
				<div className='aspect-1/1  relative h-full overflow-hidden'>
					<img src={currentStep.image} alt={currentStep.title} className='w-full h-full object-cover' />
				</div>
			</div>
		</div>
	);
}

export default StepContent;
