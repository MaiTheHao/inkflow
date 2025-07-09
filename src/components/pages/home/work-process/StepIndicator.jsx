function StepIndicator({ steps, activeStep }) {
	return (
		<div className='flex sm:hidden justify-center gap-2'>
			{steps.map((step) => (
				<div
					key={step.id}
					className={`
						w-2 h-2 rounded-full transition-all duration-300
						${activeStep === step.id ? 'bg-[var(--color-primary)] w-6' : 'bg-[var(--color-bg-accent)]'}
					`}
				/>
			))}
		</div>
	);
}

export default StepIndicator;
