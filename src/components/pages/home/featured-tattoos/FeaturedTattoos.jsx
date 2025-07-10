import { memo } from 'react';
import { ROUTES } from '../../../../const/routes';
import CTABtn from '../../../global/CTABtn';
import Section from '../Section';
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
		<Section
			title='Các tác phẩm nổi bật'
			description='Cùng sự tâm huyết và sáng tạo, chúng tôi cam kết mang đến những tác phẩm hình xăm độc đáo và ý nghĩa nhất cho khách hàng.'
			className='bg-[var(--color-bg)]'
		>
			<MobileLayout allImages={allImages} />
			<TabletLayout allImages={allImages} />
			<DesktopLayout />

			<CTABtn title={'Khám phá bộ sưu tập hình xăm'} to={ROUTES.PORTFOLIO.href}>
				Xem thêm &rarr;
			</CTABtn>
		</Section>
	);
});

export default FeaturedTattoos;
