import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../Section';
import { ROUTES } from '../../../../const/routes';

// Data tách ra ngoài component để tránh re-create mỗi lần render
const ARTISTS_DATA = [
	{
		id: 'donald-trump',
		name: 'Donald Trump (The Don)',
		specialty:
			'Nghệ sĩ xăm phong cách "Real Estate Realism" – chuyên về hình xăm kiến trúc, biểu tượng quyền lực và các slogan mang tính tuyên bố.',
		description:
			'Từng là một ông trùm bất động sản và cựu tổng thống, The Don giờ đây mang tầm nhìn vĩ đại vào thế giới xăm hình. Mỗi tác phẩm của ông không chỉ là một hình xăm, mà là một tuyên ngôn cá nhân, được thiết kế để gây ấn tượng mạnh và bền vững theo thời gian.',
		image: 'https://images.t-online.de/2022/09/CGuf2KMqgdGS/339x0:1836x1224/fit-in/633x0/donald-trump-winkt-anhaengern-zu-einem-bericht-zufolge-soll-sein-team-falsche-angaben-zu-den-dokumenten-in-seinem-amtssitz-gemacht-haben.jpg',
		portfolioLink: ROUTES.PORTFOLIO.NGHE_SI('donald-trump').href,
	},
	{
		id: 'vladimir-putin',
		name: 'Vladimir Putin (Iron Bear)',
		specialty:
			'Nghệ sĩ xăm chuyên về phong cách "Geopolitical Graphics" và "Subtle Strength" – tập trung vào hình ảnh động vật hoang dã, biểu tượng quốc gia và các hình xăm tối giản nhưng đầy ẩn ý.',
		description:
			'Với nền tảng từ thế giới tình báo và chính trị, Iron Bear mang đến sự chính xác và chiều sâu trong từng đường nét. Các tác phẩm của ông không chỉ đẹp về mặt thị giác mà còn chứa đựng thông điệp mạnh mẽ về sức mạnh nội tại và sự kiên định, lý tưởng cho những ai muốn thể hiện bản lĩnh.',
		image: 'https://tse1.mm.bing.net/th/id/OIP.24deVN_9SGzZhGPsWFbG0QHaFU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
		portfolioLink: ROUTES.PORTFOLIO.NGHE_SI('vladimir-putin').href,
	},
	{
		id: 'xi-jinping',
		name: 'Tập Cận Bình (Dragon Soul)',
		specialty:
			'Nghệ sĩ xăm phong cách "Socialism with Chinese Characteristics" – chuyên về hình ảnh núi non hùng vĩ, hoa sen, rồng phương Đông và các họa tiết thể hiện sự hài hòa, phát triển bền vững.',
		description:
			'Dragon Soul mang đến triết lý về sự thống nhất và phát triển bền vững vào từng tác phẩm xăm hình. Với phong cách độc đáo, ông tạo ra những hình xăm không chỉ đẹp mắt mà còn chứa đựng ý nghĩa sâu sắc về sự kiên cường, thịnh vượng và tinh thần dân tộc. Mỗi hình xăm là một minh chứng cho sự hài hòa giữa truyền thống và hiện đại.',
		image: 'https://tse2.mm.bing.net/th/id/OIP.uiTJCBUi9Jxvoeq-3mQpKAHaF9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
		portfolioLink: ROUTES.PORTFOLIO.NGHE_SI('xi-jinping').href,
	},
];

// Component card riêng để tối ưu performance
const ArtistCard = memo(function ArtistCard({ artist, onCardClick }) {
	const handleClick = useCallback(() => {
		onCardClick(artist.portfolioLink);
	}, [artist.portfolioLink, onCardClick]);

	const handleKeyDown = useCallback(
		(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				handleClick();
			}
		},
		[handleClick]
	);

	return (
		<article
			role='button'
			tabIndex={0}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			className='group flex flex-col bg-[var(--color-bg-secondary)] rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[var(--color-bg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 h-[520px] sm:h-[480px] md:h-[520px]'
			aria-label={`Xem portfolio của nghệ sĩ ${artist.name}`}
		>
			{/* Artist Image */}
			<div className='h-[45%] overflow-hidden'>
				<img
					src={artist.image}
					alt={`Ảnh của nghệ sĩ ${artist.name}`}
					className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
					loading='lazy'
				/>
			</div>

			{/* Content */}
			<div className='h-[55%] p-4 sm:p-6 flex flex-col justify-start'>
				{/* Artist Info */}
				<header className='mb-3 sm:mb-4'>
					<h3 className='font-bold text-[var(--color-text-header)] text-lg sm:text-xl leading-tight group-hover:text-[var(--color-text-header-hover)] transition-colors duration-300 mb-2'>
						{artist.name}
					</h3>
					<p className='text-[var(--color-text-subtitle)] text-xs sm:text-sm font-medium group-hover:text-[var(--color-text-subtitle-hover)] transition-colors duration-300 line-clamp-2'>
						{artist.specialty}
					</p>
				</header>

				{/* Description */}
				<div className='flex-1 overflow-hidden'>
					<p className='text-[var(--color-text-paragraph)] text-xs sm:text-sm leading-relaxed text-justify group-hover:text-[var(--color-text-highlight)] transition-colors duration-300 line-clamp-8 sm:line-clamp-5'>
						{artist.description}
					</p>
				</div>
			</div>
		</article>
	);
});

const FeaturedArtists = memo(function FeaturedArtists() {
	const navigate = useNavigate();

	// Memoize artists data để tránh re-compute
	const artists = useMemo(() => ARTISTS_DATA, []);

	// Memoize callback để tránh re-render ArtistCard
	const handleCardClick = useCallback(
		(portfolioLink) => {
			navigate(portfolioLink);
		},
		[navigate]
	);

	return (
		<Section
			title='Gặp gỡ nghệ sĩ'
			description='Khám phá những gương mặt tài năng và phong cách độc đáo trong thế giới hình xăm của chúng tôi.'
			className='bg-[var(--color-bg)]'
		>
			{/* Responsive Grid Container */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-[1200px]'>
				{artists.map((artist) => (
					<ArtistCard key={artist.id} artist={artist} onCardClick={handleCardClick} />
				))}
			</div>
		</Section>
	);
});

export default FeaturedArtists;
