import { memo } from 'react';
import TattooImage from './TattooImage';
import { FEATURED_TATTOOS } from './tattooData';

const categories = ['realism', 'traditional', 'blackwork', 'watercolor', 'minimalist', 'geometric'];

const MobileLayout = memo(function MobileLayout() {
	return (
		<div className='block sm:hidden w-full'>
			<div className='grid grid-cols-2 gap-2 max-w-sm mx-auto'>
				{categories.map((cat) => {
					const category = FEATURED_TATTOOS[cat];
					return (
						<TattooImage
							key={cat}
							image={category.images[0]}
							route={category.route}
							title={category.title}
							containerClassName='aspect-square'
							withHoverEffect={false}
						/>
					);
				})}
			</div>
		</div>
	);
});

export default MobileLayout;
