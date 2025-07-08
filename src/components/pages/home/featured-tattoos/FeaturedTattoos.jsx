import { memo, useMemo } from 'react';
import RECT1 from '/imgs/pages/home/featured-artists/rect1.png';
import RECT2 from '/imgs/pages/home/featured-artists/rect2.png';
import RECT3 from '/imgs/pages/home/featured-artists/rect3.png';
import SQ1 from '/imgs/pages/home/featured-artists/sq1.png';
import SQ2 from '/imgs/pages/home/featured-artists/sq2.png';
import SQ3 from '/imgs/pages/home/featured-artists/sq3.png';
import { ROUTES } from '../../../../const/routes';
import CTABtn from '../../../global/CTABtn';
import Section from '../Section';

const FeaturedTattoos = memo(function FeaturedTattoos() {
	const rectImages = useMemo(() => [RECT1, RECT2, RECT3], []);
	const squareImages = useMemo(() => [SQ1, SQ2, SQ3], []);

	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	const shuffledRects = useMemo(() => shuffleArray(rectImages), [rectImages]);
	const shuffledSquares1 = useMemo(() => shuffleArray(squareImages), [squareImages]);
	const shuffledSquares2 = useMemo(() => shuffleArray(squareImages), [squareImages]);
	const shuffledSquares3 = useMemo(() => shuffleArray(squareImages), [squareImages]);

	return (
		<Section
			title='Các tác phẩm nổi bật'
			description='Cùng sự tâm huyết và sáng tạo, chúng tôi cam kết mang đến những tác phẩm hình xăm độc đáo và ý nghĩa nhất cho khách hàng.'
			className='bg-[var(--color-bg)]'
		>
			{/* Mobile Layout - Grid */}
			<div className='block sm:hidden w-full'>
				<div className='grid grid-cols-2 gap-2 max-w-sm mx-auto'>
					{/* Mobile - Show 6 selected images */}
					<div className='aspect-square overflow-hidden rounded-lg'>
						<img src={shuffledRects[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='aspect-square overflow-hidden rounded-lg'>
						<img src={shuffledSquares1[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='aspect-square overflow-hidden rounded-lg'>
						<img src={shuffledSquares2[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='aspect-square overflow-hidden rounded-lg'>
						<img src={shuffledRects[1]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='aspect-square overflow-hidden rounded-lg'>
						<img src={shuffledSquares3[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='aspect-square overflow-hidden rounded-lg'>
						<img src={shuffledRects[2]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
				</div>
			</div>

			{/* Tablet Layout - Simplified Grid */}
			<div className='hidden sm:block lg:hidden w-full'>
				<div className='grid grid-cols-4 gap-2 h-[300px]'>
					{/* Column 1 */}
					<div className='flex flex-col gap-2'>
						<div className='flex-1 overflow-hidden rounded-lg'>
							<img src={shuffledRects[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
						</div>
						<div className='aspect-square overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares1[0]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</div>
					</div>

					{/* Column 2 */}
					<div className='flex flex-col gap-2'>
						<div className='aspect-square overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares2[0]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</div>
						<div className='flex-1 overflow-hidden rounded-lg'>
							<img src={shuffledRects[1]} className='w-full h-full object-cover' alt='Featured tattoo' />
						</div>
					</div>

					{/* Column 3 */}
					<div className='flex flex-col gap-2'>
						<div className='flex-1 overflow-hidden rounded-lg'>
							<img src={shuffledRects[2]} className='w-full h-full object-cover' alt='Featured tattoo' />
						</div>
						<div className='flex flex-row gap-1'>
							<div className='flex-1 aspect-square overflow-hidden rounded-lg'>
								<img
									src={shuffledSquares3[0]}
									className='w-full h-full object-cover'
									alt='Featured tattoo'
								/>
							</div>
							<div className='flex-1 aspect-square overflow-hidden rounded-lg'>
								<img
									src={shuffledSquares3[1]}
									className='w-full h-full object-cover'
									alt='Featured tattoo'
								/>
							</div>
						</div>
					</div>

					{/* Column 4 */}
					<div className='flex flex-col gap-2'>
						<div className='aspect-square overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares1[1]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</div>
						<div className='flex-1 overflow-hidden rounded-lg'>
							<img src={shuffledRects[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
						</div>
					</div>
				</div>
			</div>

			{/* Desktop Layout - Original Complex Layout */}
			<ul className='hidden lg:flex flex-row justify-center gap-2 h-[400px] xl:h-[450px]'>
				<li className='flex-1 flex flex-col items-center gap-2'>
					<div className='flex flex-row justify-center flex-1 overflow-hidden rounded-lg'>
						<img src={shuffledRects[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<ul className='aspect-square flex flex-col gap-1 w-full h-max'>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares1[0]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares1[1]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares1[2]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
					</ul>
				</li>
				<li className='flex-1 flex flex-col items-center gap-2 h-full'>
					<div className='flex flex-row justify-center flex-1 overflow-hidden rounded-lg'>
						<img src={shuffledRects[1]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<ul className='aspect-square flex flex-row gap-1 w-full h-max'>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares2[0]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares2[1]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares2[2]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
					</ul>
				</li>
				<li className='flex-1 flex flex-col items-center gap-2'>
					<div className='flex flex-row justify-center flex-1 overflow-hidden rounded-lg'>
						<img src={shuffledRects[2]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<ul className='aspect-square flex flex-col gap-1 w-full h-max'>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares3[0]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares3[1]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares3[2]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
					</ul>
				</li>
				<li className='flex-1 flex flex-col items-center gap-2'>
					<div className='aspect-1/1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
						<img src={shuffledSquares1[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='flex flex-row justify-center flex-1 overflow-hidden rounded-lg'>
						<img src={shuffledRects[1]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
				</li>
				<li className='flex-1 flex flex-col items-center gap-2'>
					<div className='flex flex-row justify-center flex-1 overflow-hidden rounded-lg'>
						<img src={shuffledRects[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<ul className='aspect-square flex flex-col gap-1 w-full h-max'>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares2[0]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares2[1]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
						<li className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
							<img
								src={shuffledSquares2[2]}
								className='w-full h-full object-cover'
								alt='Featured tattoo'
							/>
						</li>
					</ul>
				</li>
				<li className='flex-1 flex flex-col items-center gap-2'>
					<div className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
						<img src={shuffledSquares3[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
						<img src={shuffledSquares3[1]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='flex-1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
						<img src={shuffledSquares3[2]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
				</li>
				<li className='flex-1 flex flex-col items-center gap-2'>
					<div className='aspect-1/1 flex flex-row justify-center items-center overflow-hidden rounded-lg'>
						<img src={shuffledSquares1[1]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='flex flex-row justify-center flex-1 overflow-hidden rounded-lg'>
						<img src={shuffledRects[2]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
				</li>
				<li className='flex-1 flex flex-col items-center gap-2'>
					<div className='aspect-square flex flex-row justify-center items-center overflow-hidden rounded-lg'>
						<img src={shuffledSquares1[2]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
					<div className='flex flex-row justify-center flex-1 overflow-hidden rounded-lg'>
						<img src={shuffledRects[0]} className='w-full h-full object-cover' alt='Featured tattoo' />
					</div>
				</li>
			</ul>
			<CTABtn title={'Khám phá bộ sưu tập hình xăm'} to={ROUTES.PORTFOLIO.href}>
				Xem thêm &rarr;
			</CTABtn>
		</Section>
	);
});

export default FeaturedTattoos;
