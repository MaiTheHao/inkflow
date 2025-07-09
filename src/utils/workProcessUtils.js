export const getStepIcon = (stepId) => {
	const icons = {
		1: '💡', // Tư vấn ý tưởng
		2: '🎨', // Thiết kế riêng
		3: '💰', // Báo giá
		4: '🖋️', // Xăm - chuẩn vô trùng
		5: '🌿', // Hướng dẫn chăm sóc
	};
	return icons[stepId] || '🎨';
};

export const steps = [
	{
		id: 1,
		number: '1',
		title: 'Tư vấn ý tưởng',
		description:
			'Chia sẻ mong muốn và ý tưởng của bạn với đội ngũ chuyên gia của chúng tôi. Chúng tôi sẽ lắng nghe, phân tích và đưa ra những gợi ý, giải pháp tối ưu nhất, phù hợp với cá tính và phong cách riêng của bạn.',
		quote: 'Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu, tư vấn tận tâm và chuyên nghiệp. Chúng tôi sẽ giúp bạn biến ý tưởng thành hiện thực.',
		author: 'Mao Thế Hài',
		role: 'Chuyên viên tư vấn',
		active: true,
	},
	{
		id: 2,
		number: '2',
		title: 'Thiết kế riêng',
		description:
			'Dựa trên ý tưởng đã thống nhất, các nghệ sĩ tài năng của chúng tôi sẽ phác thảo và thiết kế riêng cho bạn một tác phẩm độc đáo, thể hiện trọn vẹn ý tưởng và mong muốn của bạn. Bạn sẽ được xem trước và duyệt mẫu thiết kế trước khi tiến hành.',
		active: false,
	},
	{
		id: 3,
		number: '3',
		title: 'Báo giá',
		description:
			'Chúng tôi cam kết mang đến dịch vụ chất lượng với mức giá cạnh tranh và minh bạch. Bảng giá chi tiết sẽ được cung cấp sau khi ý tưởng và thiết kế được hoàn thiện, đảm bảo không có chi phí ẩn phát sinh.',
		active: false,
	},
	{
		id: 4,
		number: '4',
		title: 'Xăm - chuẩn vô trùng',
		description:
			'Quy trình xăm hình tại studio được thực hiện nghiêm ngặt theo tiêu chuẩn y tế, đảm bảo vệ sinh và an toàn tuyệt đối. Chúng tôi sử dụng mực xăm chất lượng cao, trang thiết bị hiện đại và đội ngũ nghệ sĩ có tay nghề cao.',
		active: false,
	},
	{
		id: 5,
		number: '5',
		title: 'Hướng dẫn chăm sóc',
		description:
			'Sau khi hoàn thành, bạn sẽ được hướng dẫn chi tiết về cách chăm sóc hình xăm tại nhà để đảm bảo hình xăm lên màu đẹp và duy trì được độ bền lâu dài. Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn trong quá trình chăm sóc.',
		active: false,
	},
];
