import { memo } from 'react';
import DesktopColumn from './DesktopColumn';
import TattooImage from './TattooImage';
import MultiImageBlock from './MultiImageBlock';
import { FEATURED_TATTOOS } from './tattooData';

const DesktopLayout = memo(function DesktopLayout() {
	return (
		<div className='hidden lg:flex flex-row justify-center gap-2 h-[400px] xl:h-[450px]'>
			<DesktopColumn>
				<TattooImage
					image={FEATURED_TATTOOS.realism.images[0]}
					route={FEATURED_TATTOOS.realism.route}
					title={FEATURED_TATTOOS.realism.title}
					containerClassName='flex flex-row justify-center flex-1'
				/>
				<MultiImageBlock
					type='vertical'
					allImages={[
						{
							image: FEATURED_TATTOOS.realism.images[1],
							route: FEATURED_TATTOOS.realism.route,
							title: FEATURED_TATTOOS.realism.title,
						},
						{
							image: FEATURED_TATTOOS.realism.images[2],
							route: FEATURED_TATTOOS.realism.route,
							title: FEATURED_TATTOOS.realism.title,
						},
						{
							image: FEATURED_TATTOOS.traditional.images[0],
							route: FEATURED_TATTOOS.traditional.route,
							title: FEATURED_TATTOOS.traditional.title,
						},
					]}
					imageIndices={[0, 1, 2]}
					linkTo={FEATURED_TATTOOS.realism.route}
				/>
			</DesktopColumn>
			<DesktopColumn>
				<TattooImage
					image={FEATURED_TATTOOS.traditional.images[1]}
					route={FEATURED_TATTOOS.traditional.route}
					title={FEATURED_TATTOOS.traditional.title}
					containerClassName='flex flex-row justify-center flex-1'
				/>
				<MultiImageBlock
					type='horizontal'
					allImages={[
						{
							image: FEATURED_TATTOOS.traditional.images[2],
							route: FEATURED_TATTOOS.traditional.route,
							title: FEATURED_TATTOOS.traditional.title,
						},
						{
							image: FEATURED_TATTOOS.traditional.images[0],
							route: FEATURED_TATTOOS.traditional.route,
							title: FEATURED_TATTOOS.traditional.title,
						},
						{
							image: FEATURED_TATTOOS.traditional.images[1],
							route: FEATURED_TATTOOS.traditional.route,
							title: FEATURED_TATTOOS.traditional.title,
						},
					]}
					imageIndices={[0, 1, 2]}
					linkTo={FEATURED_TATTOOS.traditional.route}
				/>
			</DesktopColumn>
			<DesktopColumn>
				<TattooImage
					image={FEATURED_TATTOOS.blackwork.images[2]}
					route={FEATURED_TATTOOS.blackwork.route}
					title={FEATURED_TATTOOS.blackwork.title}
					containerClassName='flex flex-row justify-center flex-1'
				/>
				<MultiImageBlock
					type='vertical'
					allImages={[
						{
							image: FEATURED_TATTOOS.blackwork.images[0],
							route: FEATURED_TATTOOS.blackwork.route,
							title: FEATURED_TATTOOS.blackwork.title,
						},
						{
							image: FEATURED_TATTOOS.blackwork.images[0],
							route: FEATURED_TATTOOS.blackwork.route,
							title: FEATURED_TATTOOS.blackwork.title,
						},
						{
							image: FEATURED_TATTOOS.blackwork.images[1],
							route: FEATURED_TATTOOS.blackwork.route,
							title: FEATURED_TATTOOS.blackwork.title,
						},
					]}
					imageIndices={[0, 1, 2]}
					linkTo={FEATURED_TATTOOS.blackwork.route}
				/>
			</DesktopColumn>
			<DesktopColumn>
				<TattooImage
					image={FEATURED_TATTOOS.watercolor.images[2]}
					route={FEATURED_TATTOOS.watercolor.route}
					title={FEATURED_TATTOOS.watercolor.title}
					containerClassName='aspect-1/1 flex flex-row justify-center items-center'
				/>
				<TattooImage
					image={FEATURED_TATTOOS.watercolor.images[1]}
					route={FEATURED_TATTOOS.watercolor.route}
					title={FEATURED_TATTOOS.watercolor.title}
					containerClassName='flex flex-row justify-center flex-1'
				/>
			</DesktopColumn>
			<DesktopColumn>
				<TattooImage
					image={FEATURED_TATTOOS.minimalist.images[0]}
					route={FEATURED_TATTOOS.minimalist.route}
					title={FEATURED_TATTOOS.minimalist.title}
					containerClassName='flex flex-row justify-center flex-1'
				/>
				<MultiImageBlock
					type='vertical'
					allImages={[
						{
							image: FEATURED_TATTOOS.minimalist.images[1],
							route: FEATURED_TATTOOS.minimalist.route,
							title: FEATURED_TATTOOS.minimalist.title,
						},
						{
							image: FEATURED_TATTOOS.minimalist.images[0],
							route: FEATURED_TATTOOS.minimalist.route,
							title: FEATURED_TATTOOS.minimalist.title,
						},
						{
							image: FEATURED_TATTOOS.minimalist.images[1],
							route: FEATURED_TATTOOS.minimalist.route,
							title: FEATURED_TATTOOS.minimalist.title,
						},
					]}
					imageIndices={[0, 1, 2]}
					linkTo={FEATURED_TATTOOS.minimalist.route}
				/>
			</DesktopColumn>
			<DesktopColumn>
				<TattooImage
					image={FEATURED_TATTOOS.geometric.images[2]}
					route={FEATURED_TATTOOS.geometric.route}
					title={FEATURED_TATTOOS.geometric.title}
					containerClassName='w-full flex-1 flex flex-row justify-center items-center'
				/>
				<TattooImage
					image={FEATURED_TATTOOS.geometric.images[0]}
					route={FEATURED_TATTOOS.geometric.route}
					title={FEATURED_TATTOOS.geometric.title}
					containerClassName='w-full flex-1 flex flex-row justify-center items-center'
				/>
				<TattooImage
					image={FEATURED_TATTOOS.geometric.images[1]}
					route={FEATURED_TATTOOS.geometric.route}
					title={FEATURED_TATTOOS.geometric.title}
					containerClassName='w-full flex-1 flex flex-row justify-center items-center'
				/>
			</DesktopColumn>
			<DesktopColumn>
				<TattooImage
					image={FEATURED_TATTOOS.minimalist.images[2]}
					route={FEATURED_TATTOOS.minimalist.route}
					title={FEATURED_TATTOOS.minimalist.title}
					containerClassName='aspect-1/1 flex flex-row justify-center items-center'
				/>
				<TattooImage
					image={FEATURED_TATTOOS.realism.images[1]}
					route={FEATURED_TATTOOS.realism.route}
					title={FEATURED_TATTOOS.realism.title}
					containerClassName='flex flex-row justify-center flex-1'
				/>
			</DesktopColumn>
			<DesktopColumn>
				<TattooImage
					image={FEATURED_TATTOOS.traditional.images[0]}
					route={FEATURED_TATTOOS.traditional.route}
					title={FEATURED_TATTOOS.traditional.title}
					containerClassName='aspect-square flex flex-row justify-center items-center'
				/>
				<TattooImage
					image={FEATURED_TATTOOS.watercolor.images[0]}
					route={FEATURED_TATTOOS.watercolor.route}
					title={FEATURED_TATTOOS.watercolor.title}
					containerClassName='flex flex-row justify-center flex-1'
				/>
			</DesktopColumn>
		</div>
	);
});

export default DesktopLayout;
