import PageSection from '../../../global/PageSection';
import CTABtn from '../../../global/CTABtn';
import MainImg from '/imgs/pages/home/our-story/main.png';

function OurStory() {
	return (
		<PageSection className='bg-[var(--color-bg-secondary)]'>
			<div className='flex flex-col-reverse lg:flex-row items-center justify-center text-left max-w-[1200px] h-max gap-6 lg:gap-0'>
				<div className='w-full lg:flex-5 h-max flex flex-col items-start justify-center gap-4 p-4 sm:p-6 lg:p-8 text-[var(--color-text-paragraph)] text-sm sm:text-base'>
					<div className='flex flex-col gap-2 mb-4 lg:mb-6 text-center lg:text-left w-full'>
						<span className='text-[var(--color-text-subtitle)] text-sm'>
							Nơi vẽ lên câu chuyện của riêng bạn
						</span>
						<h3 className='font-semibold text-[var(--color-text-header)] text-2xl sm:text-3xl lg:text-3xl'>
							Inkflow - Những nét vẽ khởi nguyên
						</h3>
					</div>

					<p className='text-[var(--color-text-highlight)] text-justify text-sm leading-relaxed'>
						"Hình xăm là một bản tuyên ngôn mạnh mẽ, và tôi giúp bạn viết nên câu chuyện đó bằng mực. Mỗi
						tác phẩm đều phải lớn, táo bạo, và không thể bị phớt lờ." - Donald Trump (The Don)
					</p>

					<p className='text-[var(--color-text-paragraph)] text-justify text-sm leading-relaxed'>
						InkFlow là studio tiên phong trong thời kỳ cách mạng về xăm hình văn minh từ năm 2014, góp phần
						thay đổi định kiến của xã hội đối với bộ môn nghệ thuật cơ thể xứng đáng được coi trọng này.
					</p>

					<p className='text-[var(--color-text-paragraph)] text-justify text-sm leading-relaxed'>
						Chúng tôi luôn không ngừng trau dồi học hỏi và cập nhật những kỹ thuật, tri thức, dụng cụ tối
						tân để xăm đẹp hơn mỗi ngày, để hình xăm khách hàng nhận được là đẳng cấp thế giới - còn chi phí
						thì rất Việt Nam.
					</p>

					<div className='flex flex-row mt-4 lg:mt-6 w-full justify-center lg:justify-start'>
						<CTABtn to='/gioi-thieu' title='Tìm hiểu thêm về chúng tôi'>
							Tìm hiểu thêm
						</CTABtn>
					</div>
				</div>
				<div className='w-full lg:flex-6 aspect-square lg:aspect-1/1 h-full max-w-md lg:max-w-none'>
					<img
						src={MainImg}
						alt='Our Story'
						className='w-full h-full object-cover rounded-lg lg:rounded-none'
					/>
				</div>
			</div>
		</PageSection>
	);
}

export default OurStory;
