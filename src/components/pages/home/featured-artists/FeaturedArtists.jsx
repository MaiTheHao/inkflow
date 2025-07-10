import PageSection from '../../../global/PageSection';
import { ROUTES } from '../../../../const/routes';
import { memo } from 'react';
import { useMemo } from 'react';
import FeatureCard from '../../../global/FeatureCard';

// Data tách ra ngoài component để tránh re-create mỗi lần render
const ARTISTS_DATA = [
	{
		id: 'minh-thu',
		title: 'Minh Thư (GMin)',
		subtitle: 'Nét xăm nhỏ, cảm xúc to – Chuyên minimalist dễ thương.',
		description:
			'Minh Thư – hay còn gọi là GMin – yêu thích kể chuyện bằng những hình xăm nhỏ xinh, tinh tế. Mỗi nét mực đều mang một ý nghĩa nhẹ nhàng mà sâu lắng.',
		image: 'https://tse1.mm.bing.net/th/id/OIP.m7w5xzfRC493UodDwVhZBAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
		href: ROUTES.PORTFOLIO.NGHE_SI('minh-thu').href,
	},
	{
		id: 'andrew',
		title: 'Andrew (drew Xanh cỏ)',
		subtitle: 'Phong cách realism – Tái hiện chân thực từng chi tiết.',
		description:
			'Andrew, biệt danh drew Xanh cỏ, nổi bật với phong cách realism. Anh mang đến những tác phẩm xăm sống động, chân thực và đầy cảm xúc, biến ý tưởng thành hiện thực trên làn da.',
		image: 'https://manofmany.com/wp-content/uploads/2022/01/13-Best-Tattoo-Shops-and-Artists-in-Adelaide-Black-Diamond-Tattoo.jpeg',
		href: ROUTES.PORTFOLIO.NGHE_SI('andrew').href,
	},
	{
		id: 'thomas',
		title: 'Thomas (MAX ĐIÊN)',
		subtitle: 'Chuyên phong cách Traditional từ Á tới Âu.',
		description:
			'Thomas, biệt danh MAX ĐIÊN, là nghệ sĩ chuyên về phong cách Traditional, kết hợp tinh hoa từ Á tới Âu trong từng tác phẩm xăm.',
		image: 'https://skarbiecewy.pl/wp-content/uploads/2022/07/studio-tatuazu.jpg',
		href: ROUTES.PORTFOLIO.NGHE_SI('thomas').href,
	},
];

const FeaturedArtists = memo(function FeaturedArtists() {
	const artists = useMemo(() => ARTISTS_DATA, []);

	return (
		<PageSection
			title='Gặp gỡ nghệ sĩ'
			description='Mỗi hình xăm là kết quả của nội lực sáng tạo từ các nghệ sĩ của chúng tôi – những người kể chuyện qua từng nét mực, đường kim.'
			className='bg-[var(--color-bg)]'
		>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-[1200px]'>
				{artists.map((artist) => (
					<FeatureCard key={artist.id} feature={artist} href={artist.href} />
				))}
			</div>
		</PageSection>
	);
});

export default FeaturedArtists;
