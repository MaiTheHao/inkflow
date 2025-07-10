import React from 'react';
import Section from '../Section';
import FAQcard from '../../../global/FAQcard';

function FAQ() {
	const faqData = [
		{
			question: 'Xăm có đau không?',
			answers: [
				'Đau là một phần của quá trình xăm, nhưng mức độ đau khác nhau tùy thuộc vào vị trí xăm và ngưỡng chịu đau của mỗi người.',
				'Một số người mô tả cảm giác như bị đốt nhẹ, trong khi người khác lại thấy như bị cào xước.',
			],
		},
		{
			question: 'Xăm có an toàn không?',
			answers: [
				'Xăm là an toàn nếu được thực hiện bởi thợ xăm có kinh nghiệm và tuân thủ các quy trình vệ sinh.',
				'Hãy chắc chắn rằng studio xăm sử dụng kim và mực xăm mới, đã được khử trùng.',
			],
		},
		{
			question: 'Xăm bao lâu thì lành?',
			answers: [
				'Thời gian lành vết xăm khác nhau tùy thuộc vào kích thước và vị trí xăm, nhưng thường mất khoảng 2-4 tuần.',
				'Trong thời gian này, bạn cần giữ vệ sinh vết xăm và tránh ánh nắng trực tiếp.',
			],
		},
		{
			question: 'Xăm có xóa được không?',
			answers: [
				'Xăm có thể xóa được bằng laser, nhưng quá trình này tốn kém và có thể gây đau đớn.',
				'Việc xóa xăm cũng có thể để lại sẹo.',
			],
		},
		{
			question: 'Nên xăm hình gì?',
			answers: [
				'Hình xăm là một quyết định cá nhân, hãy chọn hình xăm có ý nghĩa đối với bạn.',
				'Bạn có thể tham khảo ý kiến của thợ xăm để được tư vấn về thiết kế và vị trí xăm phù hợp.',
			],
		},
	];

	return (
		<Section
			title='Câu hỏi và tips khi bắt đầu xăm'
			description='Những câu hỏi thường gặp và mẹo hữu ích cho người mới bắt đầu xăm'
			className='bg-[var(--color-bg-secondary)]'
		>
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
				{faqData.map((faq, index) => (
					<FAQcard key={index} question={faq.question} answers={faq.answers} />
				))}
			</ul>
		</Section>
	);
}

export default FAQ;
