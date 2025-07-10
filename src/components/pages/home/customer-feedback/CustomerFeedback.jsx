import React from 'react';
import Section from '../Section';
import { useState, useCallback, memo } from 'react';

const CUSTOMER_FEEDBACKS = [
	{
		name: 'Yoasobi',
		feedback:
			'Hình xăm này đúng là một tác phẩm nghệ thuật! Nghệ sĩ đã nắm bắt ý tưởng của tôi hoàn hảo và biến nó thành một kiệt tác. Cứ như là một giai điệu mới được sáng tạo trên da vậy!',
		avatar: 'https://img1.ak.crunchyroll.com/i/spire1/5aab7e7bef0a6808c5a0fc2ca3352b841658822259_large.png',
	},
	{
		name: 'Elon Musk',
		feedback:
			'Trải nghiệm cực kỳ hiệu quả! Đội ngũ làm việc chuyên nghiệp, không lãng phí thời gian và kết quả thật sự vượt trội. Hình xăm này sẽ là một phần của hành trình chinh phục sao Hỏa của tôi.',
		avatar: 'https://images.inc.com/uploaded_files/image/1920x1080/feature-114-Elon-Musk-EoY-opener-pan_7026.jpg',
	},
	{
		name: 'Taylor Swift',
		feedback:
			'Ôi, tôi yêu hình xăm này quá! Nó đẹp hơn cả những gì tôi tưởng tượng. Nghệ sĩ thật sự có tâm và tài năng. Chắc chắn tôi sẽ quay lại để có thêm "kỷ niệm" trên da!',
		avatar: 'https://wallpapers.com/images/hd/taylor-swift-stunning-performance-equals-enlightenment-yw06486uiv4phwbn.jpg',
	},
	{
		name: 'Bill Gates',
		feedback:
			'Một khoản đầu tư xứng đáng. Quy trình làm việc hiệu quả, chính xác và kết quả vượt ngoài mong đợi. Đây là một điểm cộng lớn cho bất kỳ ai muốn sở hữu một hình xăm chất lượng cao.',
		avatar: 'https://wallpapers.com/images/hd/bill-gates-smile-vaga2ec95vycqimt.jpg',
	},
	{
		name: 'Lisa (Blackpink)',
		feedback:
			'OMG, hình xăm này thật sự "đỉnh của chóp"! Nó hoàn toàn phù hợp với phong cách của tôi và giúp tôi cảm thấy tự tin hơn rất nhiều khi trình diễn. Yêu cái studio này chết mất!',
		avatar: 'https://graziamagazine.com/wp-content/uploads/2020/10/Announcement-BTS-Final-72dpi.jpg?resize=1500%2C1000',
	},
];

const CustomerFeedback = memo(function CustomerFeedback() {
	const [currentIdx, setCurrentIdx] = useState(Math.floor(CUSTOMER_FEEDBACKS.length / 2));

	const handleCustomerSelect = useCallback((index) => {
		setCurrentIdx(index);
	}, []);

	const getPosition = useCallback(
		(index) => {
			const position = index - currentIdx;
			return position;
		},
		[currentIdx]
	);

	const getArcPosition = useCallback((position) => {
		const radius = 200;
		const angleRange = 120;
		const angle = position * (angleRange / 5) * (Math.PI / 180);
		const x = radius * Math.sin(angle);
		const y = radius * (1 - Math.cos(angle));
		return { x, y };
	}, []);

	return (
		<Section className='bg-[var(--color-bg)]'>
			<div className='max-w-4xl mx-auto text-center px-4 py-16'>
				<div className='max-w-2xl mx-auto transform transition-all duration-500 flex flex-col items-center justify-end'>
					<p className='text-lg md:text-xl text-[var(--color-text-paragraph)] italic mb-6 leading-relaxed'>
						"{CUSTOMER_FEEDBACKS[currentIdx].feedback}"
					</p>
					<span className='text-xl font-title text-[var(--color-text-subtitle)] block'>
						— {CUSTOMER_FEEDBACKS[currentIdx].name}
					</span>
				</div>
				<div className='relative flex justify-center items-center h-56 mb-12'>
					{CUSTOMER_FEEDBACKS.map((customer, index) => {
						const position = getPosition(index);
						const isActive = index === currentIdx;
						const isVisible = position >= -2 && position <= 2;

						if (!isVisible) return null;

						const { x, y } = getArcPosition(position);
						const scale = isActive ? 1.3 : 0.7;
						const opacity = isActive ? 1 : 0.6;

						return (
							<div
								key={index}
								className={`absolute transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 ${
									isActive ? 'z-20' : 'z-10'
								}`}
								style={{
									transform: `translate(${x}px, ${y}px) scale(${scale})`,
									opacity: opacity,
								}}
								onClick={() => handleCustomerSelect(index)}
							>
								<img
									src={customer.avatar}
									alt={customer.name}
									className={`w-20 h-20 rounded-full object-cover border-4 transition-all duration-300 ${
										isActive
											? 'border-[var(--color-primary-hover)] shadow-xl'
											: 'border-[var(--color-bg-accent)] shadow-md hover:border-[var(--color-primary)]'
									}`}
								/>
							</div>
						);
					})}
				</div>
				<div className='flex justify-center space-x-3'>
					{CUSTOMER_FEEDBACKS.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentIdx
									? 'bg-[var(--color-primary-hover)] scale-125'
									: 'bg-[var(--color-bg-accent)] hover:bg-[var(--color-primary)]'
							}`}
							onClick={() => handleCustomerSelect(index)}
							aria-label={`Xem đánh giá của ${CUSTOMER_FEEDBACKS[index].name}`}
						/>
					))}
				</div>
			</div>
		</Section>
	);
});

export default CustomerFeedback;
