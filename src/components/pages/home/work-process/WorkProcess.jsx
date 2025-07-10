import React, { useState } from 'react';
import Section from '../Section';
import StepNavigation from './StepNavigation';
import StepContent from './StepContent';
import CTABtn from '../../../global/CTABtn';

const steps = [
	{
		id: 1,
		number: '1',
		title: 'Tư vấn ý tưởng',
		description:
			'Chia sẻ mong muốn và ý tưởng của bạn với đội ngũ chuyên gia của chúng tôi. Chúng tôi sẽ lắng nghe, phân tích và đưa ra những gợi ý, giải pháp tối ưu nhất, phù hợp với cá tính và phong cách riêng của bạn.',
		quote: 'Chúng tôi có những chuyên gia tư vấn tuyệt vời nhất, đẳng cấp thế giới! Không ai có thể tư vấn tốt hơn chúng tôi - không ai! Chúng tôi sẽ làm cho hình xăm của bạn trở thành tác phẩm nghệ thuật tuyệt đẹp, tremendous!',
		author: 'Donald Trump',
		role: 'Chuyên viên tư vấn',
		image: 'https://www.tattlab.com.au/cdn/shop/articles/wk71466988-image-kpqj4ubv.jpg?v=1641877053',
		active: true,
	},
	{
		id: 2,
		number: '2',
		title: 'Thiết kế riêng',
		description:
			'Dựa trên ý tưởng đã thống nhất, các nghệ sĩ tài năng của chúng tôi sẽ phác thảo và thiết kế riêng cho bạn một tác phẩm độc đáo, thể hiện trọn vẹn ý tưởng và mong muốn của bạn. Bạn sẽ được xem trước và duyệt mẫu thiết kế trước khi tiến hành.',
		quote: 'Nghệ thuật là sự bất tử duy nhất mà con người có thể đạt được.',
		author: 'Emmanuel Macron',
		role: 'Tổng thống Pháp',
		image: 'https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0409/users/39a760237c86c380f25a16b0513dd1f01f3a3a62/i-img900x1200-1694265390dymerz320081.jpg',
		active: false,
	},
	{
		id: 3,
		number: '3',
		title: 'Báo giá',
		description:
			'Chúng tôi cam kết mang đến dịch vụ chất lượng với mức giá cạnh tranh và minh bạch. Bảng giá chi tiết sẽ được cung cấp sau khi ý tưởng và thiết kế được hoàn thiện, đảm bảo không có chi phí ẩn phát sinh.',
		quote: 'Minh bạch trong kinh doanh là nền tảng của sự tin tưởng.',
		author: 'Justin Trudeau',
		role: 'Thủ tướng Canada',
		image: 'https://www.copicola.com/wp-content/uploads/2015/09/shutterstock_132708305-scaled.jpg',
		active: false,
	},
	{
		id: 4,
		number: '4',
		title: 'Xăm - chuẩn vô trùng',
		description:
			'Quy trình xăm hình tại studio được thực hiện nghiêm ngặt theo tiêu chuẩn y tế, đảm bảo vệ sinh và an toàn tuyệt đối. Chúng tôi sử dụng mực xăm chất lượng cao, trang thiết bị hiện đại và đội ngũ nghệ sĩ có tay nghề cao.',
		quote: 'Chất lượng và an toàn là ưu tiên hàng đầu trong mọi hoạt động.',
		author: 'Angela Merkel',
		role: 'Cựu Thủ tướng Đức',
		image: 'https://www.konmison.com/wp-content/uploads/2023/04/clean-tattoo-machine.jpg',
		active: false,
	},
	{
		id: 5,
		number: '5',
		title: 'Hướng dẫn chăm sóc',
		description:
			'Sau khi hoàn thành, bạn sẽ được hướng dẫn chi tiết về cách chăm sóc hình xăm tại nhà để đảm bảo hình xăm lên màu đẹp và duy trì được độ bền lâu dài. Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn trong quá trình chăm sóc.',
		quote: 'Chăm sóc tốt hôm nay là đầu tư cho tương lai tươi đẹp.',
		author: 'Jacinda Ardern',
		role: 'Cựu Thủ tướng New Zealand',
		image: 'https://th.bing.com/th/id/R.621f589ce43eaeba2269ddb760dd669f?rik=Jw0SvnoHIEdpPA&pid=ImgRaw&r=0',
		active: false,
	},
];

function WorkProcess() {
	const [activeStep, setActiveStep] = useState(1);
	const currentStep = steps.find((step) => step.id === activeStep);

	return (
		<Section
			title='Quy trình làm việc'
			description='Quy trình chuyên nghiệp, hiệu quả cho trải nghiệm tốt nhất.'
			className='bg-[var(--color-bg-secondary)]'
		>
			<div className='w-full max-w-[1200px] flex flex-col-reverse md:flex-col md:gap-12'>
				<StepNavigation steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
				<StepContent currentStep={currentStep} />
			</div>
			<div className='flex justify-center'>
				<CTABtn to='/lien-he' title='Liên hệ với chúng tôi'>
					Đặt lịch ngay &rarr;
				</CTABtn>
			</div>
		</Section>
	);
}

export default WorkProcess;
