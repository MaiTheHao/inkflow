import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function DesktopStep({ step, activeStep, setActiveStep }) {
	return (
		<div
			className={`
				flex flex-col items-center gap-3 cursor-pointer transition-all duration-300
				${activeStep === step.id ? 'scale-110' : 'hover:scale-105'}
			`}
			onClick={() => setActiveStep(step.id)}
		>
			<div
				className={`
				w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-lg lg:text-xl font-bold transition-all duration-300
				${
					activeStep === step.id
						? 'bg-[var(--color-primary)] text-white shadow-lg'
						: 'bg-transparent border-2 border-[var(--color-bg-accent)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)]'
				}
			`}
			>
				{step.number}
			</div>
			<p
				className={`
				text-xs lg:text-sm font-medium text-center w-25 lg:w-30 h-8 lg:h-10 flex items-center justify-center leading-tight transition-colors duration-300
				${activeStep === step.id ? 'text-[var(--color-text-header)]' : 'text-[var(--color-text-secondary)]'}
			`}
			>
				{step.title}
			</p>
		</div>
	);
}

function DesktopNavigation({ steps, activeStep, setActiveStep }) {
	return (
		<div className='hidden md:flex items-center justify-center gap-4 lg:gap-6 xl:gap-8'>
			{steps.map((step, index) => (
				<React.Fragment key={step.id}>
					<DesktopStep step={step} activeStep={activeStep} setActiveStep={setActiveStep} />
					{index < steps.length - 1 && (
						<div className='flex items-center justify-center h-16'>
							<FontAwesomeIcon
								icon={faChevronRight}
								className={`
									text-sm lg:text-lg transition-colors duration-300
									${activeStep > step.id ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-bg-accent)]'}
								`}
							/>
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	);
}

function TabletStep({ step, activeStep, setActiveStep }) {
	return (
		<div
			className={`
				flex flex-col items-center gap-2 cursor-pointer transition-all duration-300
				${activeStep === step.id ? 'scale-105' : 'hover:scale-102'}
			`}
			onClick={() => setActiveStep(step.id)}
		>
			<div
				className={`
				w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold transition-all duration-300
				${
					activeStep === step.id
						? 'bg-[var(--color-primary)] text-white shadow-lg'
						: 'bg-transparent border-2 border-[var(--color-bg-accent)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]'
				}
			`}
			>
				{step.number}
			</div>
			<p
				className={`
				text-xs font-medium text-center w-25 h-max flex items-center justify-center leading-tight transition-colors duration-300
				${activeStep === step.id ? 'text-[var(--color-text-header)]' : 'text-[var(--color-text-secondary)]'}
			`}
			>
				{step.title}
			</p>
		</div>
	);
}

function TabletNavigation({ steps, activeStep, setActiveStep }) {
	return (
		<div className='hidden sm:grid md:hidden grid-cols-3 gap-6 w-full max-w-lg'>
			{/* First row - 3 steps */}
			{steps.slice(0, 3).map((step) => (
				<TabletStep key={step.id} step={step} activeStep={activeStep} setActiveStep={setActiveStep} />
			))}

			{/* Second row - 2 steps centered */}
			<div className='col-span-3 flex justify-center gap-12'>
				{steps.slice(3, 5).map((step) => (
					<TabletStep key={step.id} step={step} activeStep={activeStep} setActiveStep={setActiveStep} />
				))}
			</div>
		</div>
	);
}

function MobileStep({ step, activeStep, setActiveStep }) {
	return (
		<div
			className={`
				flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300
				${
					activeStep === step.id
						? 'bg-[var(--color-bg-tertiary)] border-2 border-[var(--color-primary)]'
						: 'bg-[var(--color-bg-tertiary)] border-2 border-transparent hover:border-[var(--color-bg-accent)]'
				}
			`}
			onClick={() => setActiveStep(step.id)}
		>
			<div
				className={`
				w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold transition-all duration-300 flex-shrink-0
				${
					activeStep === step.id
						? 'bg-[var(--color-primary)] text-white'
						: 'bg-[var(--color-bg-accent)] text-[var(--color-text-secondary)]'
				}
			`}
			>
				{step.number}
			</div>
			<p
				className={`
				text-sm font-medium transition-colors duration-300 flex-1
				${activeStep === step.id ? 'text-[var(--color-text-header)]' : 'text-[var(--color-text-secondary)]'}
			`}
			>
				{step.title}
			</p>
			{activeStep === step.id && (
				<FontAwesomeIcon icon={faChevronRight} className='text-[var(--color-primary)] text-sm' />
			)}
		</div>
	);
}

function MobileNavigation({ steps, activeStep, setActiveStep }) {
	return (
		<div className='flex sm:hidden flex-col gap-4 w-full max-w-sm'>
			{steps.map((step) => (
				<MobileStep key={step.id} step={step} activeStep={activeStep} setActiveStep={setActiveStep} />
			))}
		</div>
	);
}

function StepNavigation({ steps, activeStep, setActiveStep }) {
	return (
		<div className='flex flex-col items-center gap-8'>
			<DesktopNavigation steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
			<TabletNavigation steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
			<MobileNavigation steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
		</div>
	);
}

export default StepNavigation;
