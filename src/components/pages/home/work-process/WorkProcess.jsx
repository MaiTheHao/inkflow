import React, { useState } from 'react';
import Section from '../Section';
import StepNavigation from './StepNavigation';
import StepContent from './StepContent';
import StepIndicator from './StepIndicator';
import { steps, getStepIcon } from '../../../../utils/workProcessUtils';
import CTABtn from '../../../global/CTABtn';

function WorkProcess() {
	const [activeStep, setActiveStep] = useState(1);
	const currentStep = steps.find((step) => step.id === activeStep);

	return (
		<Section
			title='Quy trình làm việc'
			description='Quy trình chuyên nghiệp, hiệu quả cho trải nghiệm tốt nhất.'
			className='bg-[var(--color-bg-secondary)]'
		>
			<div className='w-full max-w-[1200px] flex flex-col gap-12'>
				<StepNavigation steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />

				<StepContent currentStep={currentStep} getStepIcon={getStepIcon} />

				<StepIndicator steps={steps} activeStep={activeStep} />
			</div>
			<div>
				<CTABtn to='/lien-he' title='Liên hệ với chúng tôi'>
					Đặt lịch ngay &rarr;
				</CTABtn>
			</div>
		</Section>
	);
}

export default WorkProcess;
