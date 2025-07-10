import PageHeader from '../components/global/PageHeader';
import { ROUTES } from '../const/routes';
import FeatureCard from '../components/pages/introduce/FeatureCard';
import PageSection from '../components/global/PageSection';

function Introduce() {
	const features = [
		{
			image: 'https://p1.pxfuel.com/preview/773/581/128/art-body-art-tattoo-design.jpg',
			title: 'Nghệ thuật xăm hình',
			subtitle: '',
			description:
				'Chúng tôi là studio xăm chuyên nghiệp, mang đến những tác phẩm nghệ thuật độc đáo và an toàn cho khách hàng.',
		},
		{
			image: 'https://apicms.thestar.com.my/uploads/images/2023/08/26/2252458.jpg',
			title: 'Đội ngũ nghệ nhân',
			subtitle: '',
			description:
				'Đội ngũ nghệ nhân xăm của chúng tôi có nhiều năm kinh nghiệm, luôn sáng tạo và tận tâm với từng tác phẩm.',
		},
		{
			image: 'https://www.konmison.com/wp-content/uploads/2023/04/clean-tattoo-machine.jpg',
			title: 'Dịch vụ & An toàn',
			subtitle: '',
			description:
				'Chúng tôi cam kết sử dụng mực và thiết bị chất lượng cao, đảm bảo vệ sinh và an toàn tuyệt đối cho khách hàng.',
		},
	];

	return (
		<>
			<PageHeader
				paths={[
					{ name: 'Trang chủ', href: ROUTES.TRANG_CHU.href },
					{ name: 'Giới thiệu', href: ROUTES.GIOI_THIEU.href },
				]}
				bgImage='https://i.pinimg.com/originals/4d/c0/59/4dc0593899acc8dcb1ef8bd91af01841.png'
			/>
			<PageSection className='bg-(--color-bg)'>
				<ul className='w-full flex flex-row items-center justify-evenly gap-4'>
					{features.map((feature, idx) => (
						<li key={`${feature.title}-${idx}`} className='min-w-[15rem] flex-1'>
							<FeatureCard feature={feature} />
						</li>
					))}
				</ul>
			</PageSection>
		</>
	);
}

export default Introduce;
