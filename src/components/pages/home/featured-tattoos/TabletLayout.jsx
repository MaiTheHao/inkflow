import { memo } from 'react';
import TattooImage from './TattooImage';
import { FEATURED_TATTOOS } from './tattooData';

const TabletLayout = memo(function TabletLayout() {
	// Lấy từng thể loại rõ ràng
	const traditional = FEATURED_TATTOOS.traditional;
	const realism = FEATURED_TATTOOS.realism;
	const blackwork = FEATURED_TATTOOS.blackwork;
	const watercolor = FEATURED_TATTOOS.watercolor;
	const minimalist = FEATURED_TATTOOS.minimalist;
	const geometric = FEATURED_TATTOOS.geometric;

	return (
		<div className='hidden sm:block lg:hidden w-full'>
			<div className='grid grid-cols-4 gap-2 h-[300px]'>
				{/* Column 1 */}
				<div className='flex flex-col gap-2'>
					<TattooImage
						image={realism.images[0]}
						route={realism.route}
						title={realism.title}
						containerClassName='flex-1'
					/>
					<TattooImage
						image={traditional.images[0]}
						route={traditional.route}
						title={traditional.title}
						containerClassName='aspect-square'
					/>
				</div>

				{/* Column 2 */}
				<div className='flex flex-col gap-2'>
					<TattooImage
						image={blackwork.images[0]}
						route={blackwork.route}
						title={blackwork.title}
						containerClassName='aspect-square'
					/>
					<TattooImage
						image={realism.images[1]}
						route={realism.route}
						title={realism.title}
						containerClassName='flex-1'
					/>
				</div>

				{/* Column 3 */}
				<div className='flex flex-col gap-2'>
					<TattooImage
						image={watercolor.images[2]}
						route={watercolor.route}
						title={watercolor.title}
						containerClassName='flex-1'
					/>
					<div className='flex flex-row gap-1'>
						<TattooImage
							image={minimalist.images[0]}
							route={minimalist.route}
							title={minimalist.title}
							containerClassName='flex-1 aspect-square'
						/>
						<TattooImage
							image={traditional.images[1]}
							route={traditional.route}
							title={traditional.title}
							containerClassName='flex-1 aspect-square'
						/>
					</div>
				</div>

				{/* Column 4 */}
				<div className='flex flex-col gap-2'>
					<TattooImage
						image={geometric.images[2]}
						route={geometric.route}
						title={geometric.title}
						containerClassName='aspect-square'
					/>
					<TattooImage
						image={watercolor.images[0]}
						route={watercolor.route}
						title={watercolor.title}
						containerClassName='flex-1'
					/>
				</div>
			</div>
		</div>
	);
});

export default TabletLayout;
