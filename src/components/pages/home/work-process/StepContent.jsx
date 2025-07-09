import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function StepContent({ currentStep, getStepIcon }) {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-0 items-start border-2 border-[var(--color-bg-accent)] rounded-2xl overflow-hidden'>
			<div className='flex flex-col gap-8 px-10 py-10'>
				<div className='flex flex-col gap-4'>
					<h3 className='text-3xl lg:text-4xl font-bold text-[var(--color-text-header)] font-title'>
						{currentStep.title}
					</h3>
					<p className='text-[var(--color-text-paragraph)] leading-relaxed text-base'>
						{currentStep.description}
					</p>
				</div>

				{currentStep.quote && (
					<div className='border-b-2 border-[var(--color-bg-highlight)] pb-6'>
						<div className='flex flex-row gap-5 items-start'>
							<div className='text-[var(--color-text-primary)] text-5xl font-bold leading-none'>
								<FontAwesomeIcon icon={faQuoteLeft} />
							</div>
							<div className='flex-1 flex flex-col gap-4 pt-6'>
								<blockquote className='text-[var(--color-text-secondary)] italic leading-relaxed text-base'>
									{currentStep.quote}
								</blockquote>
								<div className='flex flex-col gap-1 pt-2'>
									<cite className='text-[var(--color-text-header)] font-bold text-base not-italic'>
										{currentStep.author}
									</cite>
									<span className='text-[var(--color-text-muted)] text-sm font-medium italic'>
										{currentStep.role}
									</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			<div className='flex flex-col h-full'>
				<div className='relative bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-accent)] h-full min-h-[400px] flex items-center justify-center border-2 border-dashed border-[var(--color-bg-accent)] overflow-hidden group'>
					<div className='absolute inset-0 opacity-10'>
						<div
							className='w-full h-full'
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
							}}
						></div>
					</div>

					<div className='text-center text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors duration-300 z-10'>
						<div className='text-5xl lg:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300'>
							{getStepIcon(currentStep.id)}
						</div>
						<h4 className='text-lg font-semibold mb-2 text-[var(--color-text-secondary)]'>
							Hình ảnh minh họa
						</h4>
						<p className='text-sm opacity-80'>{currentStep.title}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StepContent;
