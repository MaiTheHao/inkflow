import PageSection from '../../../global/PageSection';
import FeatureCard from '../../../global/FeatureCard';

function Features() {
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
		<PageSection className='bg-(--color-bg)'>
			<ul className='w-full flex flex-col md:flex-row items-center justify-evenly gap-4'>
				{features.map((feature, idx) => (
					<li key={`${feature.title}-${idx}`} className='flex-1'>
						<FeatureCard feature={feature} className='md:h-[380px]' />
					</li>
				))}
			</ul>
		</PageSection>
	);
}

export default Features;
