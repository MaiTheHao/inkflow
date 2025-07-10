import { useState } from 'react';
import { FEATURED_TATTOOS } from '../../../data/tattoos.data';
import PageSection from '../../global/PageSection';

function ListTattoos() {
	const [selectedCategory, setSelectedCategory] = useState('traditional');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

	const categories = Object.entries(FEATURED_TATTOOS).map(([key, category]) => ({
		key,
		title: category.title,
		images: category.images,
	}));

	const getFilteredImages = () => {
		const selectedCat = FEATURED_TATTOOS[selectedCategory];
		return selectedCat
			? selectedCat.images.map((imageUrl, index) => ({
					src: imageUrl,
					alt: `${selectedCat.title} tattoo ${index + 1}`,
					categoryKey: selectedCat.title,
					categoryId: selectedCategory,
			  }))
			: [];
	};

	const filteredImages = getFilteredImages();
	const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const displayImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);

	const handleCategoryChange = (categoryKey) => {
		setSelectedCategory(categoryKey);
		setCurrentPage(1);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<PageSection
			title='Tác phẩm'
			description='Mỗi một sản phẩm được hoàn thành đầy đủ đều trải qua rất nhiều lần xăm'
			className='bg-[var(--color-bg)]'
		>
			<div className='w-full'>
				<ul className='flex flex-row gap-4 sm:gap-6 lg:gap-8 justify-center flex-wrap mb-8 sm:mb-10 lg:mb-12'>
					{categories.map((category) => (
						<li key={category.key}>
							<button
								onClick={() => handleCategoryChange(category.key)}
								className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
									selectedCategory === category.key
										? 'bg-[var(--color-primary)] text-[var(--color-text-header)] shadow-lg'
										: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-subtitle)] hover:bg-[var(--color-bg-accent)] hover:text-[var(--color-text-header)]'
								}`}
							>
								{category.title}
							</button>
						</li>
					))}
				</ul>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8'>
					{displayImages.map((image, index) => (
						<div
							key={`${image.categoryId}-${startIndex + index}`}
							className='group relative aspect-16/9 overflow-hidden rounded-lg bg-[var(--color-bg-secondary)] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
						>
							<img
								src={image.src}
								alt={image.alt}
								className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
							/>
							<div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-all duration-300' />
						</div>
					))}
				</div>

				{totalPages > 1 && (
					<div className='flex justify-center items-center gap-1 sm:gap-2 flex-wrap'>
						<button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className='px-2 py-2 sm:px-3 text-sm sm:text-base rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-subtitle)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-bg-accent)] transition-all duration-300 cursor-pointer'
						>
							Trước
						</button>

						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								key={page}
								onClick={() => handlePageChange(page)}
								className={`px-2 py-2 sm:px-3 text-sm sm:text-base min-w-[32px] sm:min-w-[36px] rounded-lg transition-all duration-300 cursor-pointer ${
									currentPage === page
										? 'bg-[var(--color-primary)] text-[var(--color-text-header)]'
										: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-subtitle)] hover:bg-[var(--color-bg-accent)]'
								}`}
							>
								{page}
							</button>
						))}

						<button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className='px-2 py-2 sm:px-3 text-sm sm:text-base rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-subtitle)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-bg-accent)] transition-all duration-300 cursor-pointer'
						>
							Tiếp
						</button>
					</div>
				)}

				{displayImages.length === 0 && (
					<div className='text-center py-12'>
						<p className='text-[var(--color-text-muted)] text-lg'>
							Không có hình ảnh nào trong danh mục này.
						</p>
					</div>
				)}
			</div>
		</PageSection>
	);
}

export default ListTattoos;
