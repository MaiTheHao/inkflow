import { memo } from 'react';
import { ROUTES } from '../../../../const/routes';
import CTABtn from '../../../global/CTABtn';
import PageSection from '../../../global/PageSection';
import { FEATURED_TATTOOS } from './tattooData';
import MobileLayout from './MobileLayout';
import TabletLayout from './TabletLayout';
import DesktopLayout from './DesktopLayout';

const FeaturedTattoos = memo(function FeaturedTattoos() {
	const tattooCategories = Object.values(FEATURED_TATTOOS);
	const allImages = tattooCategories.flatMap((category) =>
		category.images.map((image) => ({
			image,
			route: category.route,
			title: category.title,
		}))
	);

	return (
		<PageSection
			title='Các tác phẩm nổi bật'
			description='Các tác phẩm của InkFlow mang theo câu chuyện riêng, mỗi nét vẽ là một hành trình đặc biệt.'
			className='bg-[var(--color-bg)]'
		>
			<MobileLayout allImages={allImages} />
			<TabletLayout allImages={allImages} />
			<DesktopLayout />

			<CTABtn title={'Khám phá bộ sưu tập hình xăm'} to={ROUTES.PORTFOLIO.href}>
				Xem thêm &rarr;
			</CTABtn>
		</PageSection>
	);
});

export default FeaturedTattoos;
