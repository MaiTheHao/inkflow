import { memo } from 'react';
import PageSection from '../../global/PageSection';
import FeatureCard from '../../global/FeatureCard';

// Dữ liệu câu chuyện liên quan đến hình xăm
const TATTOO_STORIES = [
	{
		id: 1,
		image: 'https://i.pinimg.com/originals/56/be/e0/56bee0a528df68647ae35c381335f3f4.jpg',
		title: 'Hành trình tìm kiếm phong cách riêng',
		description:
			'Mỗi nghệ sĩ xăm đều có một câu chuyện riêng về cách họ tìm ra phong cách nghệ thuật của mình. Từ những nét vẽ đầu tiên đến việc hoàn thiện kỹ thuật, đây là hành trình dài đầy thử thách và đam mê.',
	},
	{
		id: 2,
		image: 'https://tse4.mm.bing.net/th/id/OIP.Selc1JaXK23wqamYKRgLJwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
		title: 'Ý nghĩa sâu sắc đằng sau mỗi hình xăm',
		description:
			'Không chỉ là nghệ thuật trên da, mỗi hình xăm đều mang trong mình một câu chuyện, một kỷ niệm hay một ý nghĩa đặc biệt của người sở hữu. Đó là lý do khiến nghề xăm hình trở nên thiêng liêng.',
	},
	{
		id: 3,
		image: 'https://th.bing.com/th/id/OIP.T1ZZI61dis_xyDHkVpMhrwHaJQ?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
		title: 'Sự phát triển của nghệ thuật xăm hình',
		description:
			'Từ những nét vẽ truyền thống cổ xưa đến các phong cách hiện đại như realism, watercolor hay blackwork, nghệ thuật xăm hình đã trải qua nhiều thế kỷ phát triển và không ngừng đổi mới.',
	},
	{
		id: 4,
		image: 'https://th.bing.com/th/id/R.ba7d304520eeb0f2b5bb336cfcabc0e5?rik=EIpk0wJ816N1wA&riu=http%3a%2f%2fcreativeinktattoo.com%2fwp-content%2fuploads%2f2023%2f01%2fimage2-6.jpeg&ehk=G7soyqBmvFSfLxoKl5eWdE0x2TavHi%2b%2fO%2bsy%2bhx20j0%3d&risl=&pid=ImgRaw&r=0',
		title: 'Văn hóa xăm hình trong cộng đồng',
		description:
			'Xăm hình không chỉ là nghệ thuật cá nhân mà còn tạo nên một cộng đồng gắn kết. Những người yêu thích xăm hình thường chia sẻ kinh nghiệm, câu chuyện và tạo nên những mối quan hệ đặc biệt.',
	},
];

const TattooStory = memo(function TattooStory() {
	return (
		<PageSection className='bg-[var(--color-bg-secondary)]'>
			<div className='w-full relative'>
				<h2 className='text-xl sm:text-2xl font-bold text-[var(--color-text-header)] mb-6 sm:mb-8 lg:mb-10 text-left'>
					Câu chuyện liên quan
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6'>
					{TATTOO_STORIES.map((story) => (
						<FeatureCard
							key={story.id}
							feature={{
								image: story.image,
								subtitle: '',
								title: story.title,
								description: story.description,
							}}
							className='h-[300px] sm:h-[350px] lg:h-[400px] group bg-[var(--color-bg)]'
							aspectRatio={[50, 50]}
						/>
					))}
				</div>
			</div>
		</PageSection>
	);
});

export default TattooStory;
