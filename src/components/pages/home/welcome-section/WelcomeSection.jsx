import { ROUTES } from '../../../../const/routes';
import { memo } from 'react';
import CTABtn from '../../../global/CTABtn';

function WelcomeSection() {
	return (
		<div className='relative w-full h-[100vh] min-h-[500px] max-h-[800px] flex items-center justify-center overflow-hidden'>
			<video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
				<source src='/vids/home-hero-section.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>

			<div className='relative w-full z-10 text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-black/40 flex flex-col items-center gap-4 sm:gap-6'>
				<h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-header)] max-w-4xl leading-tight'>
					INKFLOW - Nơi mỗi hình xăm là một hành trình
				</h1>

				<p className='text-sm sm:text-base text-[var(--color-text-paragraph)] max-w-2xl leading-relaxed'>
					Chúng tôi tạo ra không gian nghệ thuật độc đáo, nơi xăm không chỉ là hình vẽ mà còn là dấu ấn cá
					nhân, hãy để chúng tôi kể câu chuyện riêng của bạn.
				</p>

				<div className='mt-2 sm:mt-4'>
					<CTABtn title={'Đặt lịch ngay'} to={ROUTES.DAT_LICH.href}>
						Đặt lịch ngay &rarr;
					</CTABtn>
				</div>
			</div>
		</div>
	);
}
export default memo(WelcomeSection);
