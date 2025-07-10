import PageSection from '../../../global/PageSection';

function Summary() {
	return (
		<PageSection
			title='Câu Chuyện Về Nghệ Sĩ'
			description='Hành trình của chúng tôi trong nghệ thuật xăm hình và những tác phẩm đầy tâm huyết'
			className='bg-[var(--color-bg-secondary)]'
		>
			<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
				{/* Left Column */}
				<div className='flex flex-col gap-6 sm:gap-8'>
					{/* Artist Story Image */}
					<div className='flex flex-col gap-4'>
						<div className='w-full aspect-[3/2] overflow-hidden rounded-lg'>
							<img
								className='w-full h-full object-cover'
								src='https://titusvilletattoo.com/wp-content/uploads/2024/05/tattoo-care-hp-gq-01oct18_istock_b.webp'
								alt='Thợ xăm nghệ thuật'
							/>
						</div>
						<h3 className='text-xl sm:text-2xl font-bold text-[var(--color-text-header)] text-center'>
							Câu chuyện về Artist
						</h3>
					</div>

					{/* Artist Story Text */}
					<div className='flex flex-col gap-4 text-[var(--color-text-paragraph)]'>
						<p className='text-sm  leading-relaxed'>
							Đừng gọi tôi là một{' '}
							<strong className='text-[var(--color-text-highlight)]'>nghệ sĩ xăm</strong>, vì nếu không có
							các bạn, tôi sẽ không có những tác phẩm cho riêng mình.
						</p>
						<p className='text-sm  leading-relaxed'>
							Trân trọng lắng nghe, phác thảo và xây dựng tốt nhất ý tưởng của bạn để tạo nên một{' '}
							<strong className='text-[var(--color-text-highlight)]'>hình xăm đẹp</strong> là may mắn của
							những <strong className='text-[var(--color-text-highlight)]'>thợ xăm</strong> chúng tôi.
							Thật ra, với tôi các bạn mới xứng được gọi là nghệ sĩ vì đã tạo ra những ý tưởng hình xăm
							tuyệt vời cho riêng bạn.
						</p>
						<p className='text-sm  leading-relaxed'>
							Chính nhờ những tác phẩm thuộc sở hữu của các bạn mà chúng tôi{' '}
							<span className='underline'>
								<strong className='text-[var(--color-text-highlight)]'>được tôn vinh</strong>
							</span>
							.
						</p>
						<p className='text-sm  leading-relaxed'>
							Chúng tôi <strong className='text-[var(--color-text-highlight)]'>luôn tự hào</strong> được
							xăm cho bạn và bạn cũng sẽ thấy{' '}
							<strong className='text-[var(--color-text-highlight)]'>hài lòng, hãnh diện</strong> vì sở
							hữu những tác phẩm xăm của chính mình từ InkFlow.
						</p>
					</div>

					{/* Award Winning Piece */}
					<div className='flex flex-col gap-4'>
						<div className='w-full aspect-[2/3] overflow-hidden rounded-lg max-w-[400px] mx-auto'>
							<img
								className='w-full h-full object-cover'
								src='https://i.pinimg.com/originals/ed/8d/ad/ed8dad31f7a08df786c359fa866ce023.jpg'
								alt='Hình xăm geometric'
							/>
						</div>
						<p className='text-sm text-[var(--color-text-secondary)] text-center italic'>
							Tác phẩm đoạt giải nhất Big Piece tại SaiGon Tattoo Expo 2099.
						</p>
					</div>
				</div>

				{/* Right Column */}
				<div className='flex flex-col gap-6 sm:gap-8'>
					{/* Main Description */}
					<div className='flex flex-col gap-4 text-[var(--color-text-paragraph)]'>
						<p className='text-sm  leading-relaxed'>
							Không chỉ khiến giới trẻ Sài Gòn mê mệt với những hình xăm nhỏ dễ thương, những mẫu xăm đầy
							cá tính. InkFlow Tattoo còn đang từng bước dùng nghệ thuật của mình để nói với cộng đồng
							rằng: xăm hình vốn dĩ không "dữ dằn" như người ta vẫn nghĩ.
						</p>
						<p className='text-sm  leading-relaxed font-semibold text-[var(--color-text-highlight)]'>
							Đó chỉ là cách để kể về câu chuyện của bản thân theo một cách khác mà thôi.
						</p>
						<p className='text-sm  leading-relaxed'>
							InkFlow tự hào là một{' '}
							<strong className='text-[var(--color-text-highlight)]'>tiệm xăm chuyên nghiệp</strong>, từ
							không gian đậm chất art cuốn hút khách xăm. Đội ngũ thợ xăm với phong cách và tác phong
							chuyên nghiệp, từ khâu tư vấn, thiết kế đến thực hiện xăm hình.
						</p>
						<p className='text-sm  leading-relaxed'>
							Toàn bộ các thiết bị chuyện dụng, được nhập từ các thương hiệu lớn, như{' '}
							<strong className='text-[var(--color-text-highlight)]'>Chenyene</strong>,{' '}
							<strong className='text-[var(--color-text-highlight)]'>Equaliser</strong>,{' '}
							<strong className='text-[var(--color-text-highlight)]'>Sunkin</strong>,{' '}
							<strong className='text-[var(--color-text-highlight)]'>Inkbed</strong> tại Mỹ về để có thể
							tạo nên những tác phẩm nghệ thuật đạt cả tiêu chí về thẩm mĩ và chất lượng cho khách hàng.
						</p>
					</div>

					{/* Gallery Images */}
					<div className='flex flex-col gap-6'>
						{/* International Clients */}
						<div className='flex flex-col gap-3'>
							<div className='w-full aspect-[16/9] overflow-hidden rounded-lg'>
								<img
									className='w-full h-full object-cover'
									src='https://i.pinimg.com/originals/d6/bd/37/d6bd379f3126df7e63186cd74dc78752.jpg'
									alt='Khách nước ngoài tại InkFlow'
								/>
							</div>
							<p className='text-sm text-[var(--color-text-secondary)] text-center italic'>
								Phong cách xăm độc, lạ của InkFlow gây thu hút, ấn tượng với rất nhiều khách nước ngoài.
							</p>
						</div>

						{/* Female Clients */}
						<div className='flex flex-col gap-3'>
							<div className='w-full aspect-[16/9] overflow-hidden rounded-lg'>
								<img
									className='w-full h-full object-cover'
									src='https://tattoopeak.com/wp-content/uploads/2024/09/Half-Sleeve-Tattoo-Ideas-for-Women.png'
									alt='Khách nữ tại InkFlow'
								/>
							</div>
							<p className='text-sm text-[var(--color-text-secondary)] text-center italic'>
								Rất nhiều bạn nữ cũng tới InkFlow để sở hữu những hình xăm nhỏ xinh nhưng vẫn siêu ngầu.
							</p>
						</div>
					</div>

					{/* Final Message */}
					<div className='flex flex-col gap-4'>
						<p className='text-sm  leading-relaxed text-[var(--color-text-paragraph)]'>
							Nếu bạn đang muốn có những hình xăm siêu cool, siêu ngầu, giúp khẳng định được cá tính riêng
							của bản thân thì <strong className='text-[var(--color-text-highlight)]'>InkFlow</strong> là
							một địa chỉ rất đáng để cân nhắc. Cùng ghé qua Salon InkFlow trên đường{' '}
							<strong className='text-[var(--color-text-highlight)]'>Nguyễn Cư Trinh</strong>,{' '}
							<strong className='text-[var(--color-text-highlight)]'>tiệm xăm quận 1</strong>, để hiểu hơn
							về môn nghệ thuật đặc biệt này.
						</p>
					</div>
				</div>
			</div>
		</PageSection>
	);
}

export default Summary;
