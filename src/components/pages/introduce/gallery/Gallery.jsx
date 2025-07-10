import { useState, useRef } from 'react';
import PageSection from '../../../global/PageSection';

function Gallery() {
	// Mảng chứa 4 ảnh mock
	const images = [
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 1',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
		{
			src: 'https://th.bing.com/th/id/OIP.TqHlomTPruesNLXtjc_FIwAAAA?w=265&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
			alt: 'Nghệ thuật xăm hình 2',
		},
	];

	const scrollContainerRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [velocity, setVelocity] = useState(0);
	const [lastX, setLastX] = useState(0);
	const [lastTime, setLastTime] = useState(0);

	const gravity = 0.95; // Hệ số giảm tốc độ
	const fraction = 0.35;

	const handleSetVelocity = (newVelocity) => {
		setVelocity(newVelocity);
	};

	// Xử lý scroll infinite
	const handleScroll = () => {
		const container = scrollContainerRef.current;
		if (!container || isDragging) return;
	};

	// Xử lý bắt đầu kéo
	const handleMouseDown = (e) => {
		setIsDragging(true);
		const x = (e.pageX - scrollContainerRef.current.offsetLeft) * fraction;
		setStartX(x);
		setLastX(x);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
		setVelocity(0);
		setLastTime(Date.now());
	};

	const handleTouchStart = (e) => {
		setIsDragging(true);
		const x = (e.touches[0].pageX - scrollContainerRef.current.offsetLeft) * fraction;
		setStartX(x);
		setLastX(x);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
		setVelocity(0);
		setLastTime(Date.now());
	};

	// Xử lý kéo
	const handleMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = (e.pageX - scrollContainerRef.current.offsetLeft) * fraction;
		const currentTime = Date.now();
		const deltaTime = currentTime - lastTime;
		const deltaX = x - lastX;

		// Tính vận tốc
		if (deltaTime > 0) {
			handleSetVelocity(deltaX / deltaTime);
		}

		const walk = (x - startX) * 2;
		scrollContainerRef.current.scrollLeft = scrollLeft - walk;

		setLastX(x);
		setLastTime(currentTime);
	};

	const handleTouchMove = (e) => {
		if (!isDragging) return;
		const x = (e.touches[0].pageX - scrollContainerRef.current.offsetLeft) * fraction;
		const currentTime = Date.now();
		const deltaTime = currentTime - lastTime;
		const deltaX = x - lastX;

		// Tính vận tốc
		if (deltaTime > 0) {
			handleSetVelocity(deltaX / deltaTime);
		}

		const walk = (x - startX) * 2;
		scrollContainerRef.current.scrollLeft = scrollLeft - walk;

		setLastX(x);
		setLastTime(currentTime);
	};

	// Xử lý kết thúc kéo với gia tốc
	const handleMouseUp = () => {
		setIsDragging(false);
		applyMomentum();
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
		applyMomentum();
	};

	// Áp dụng gia tốc sau khi thả
	const applyMomentum = () => {
		let currentVelocity = velocity * 15; // Tăng cường độ momentum

		const animate = () => {
			if (Math.abs(currentVelocity) < 0.5) return;

			scrollContainerRef.current.scrollLeft -= currentVelocity;
			currentVelocity *= gravity;

			requestAnimationFrame(animate);
		};

		if (Math.abs(currentVelocity) > 0.5) {
			requestAnimationFrame(animate);
		}
	};

	return (
		<PageSection
			maxWidth={0}
			style={{ paddingLeft: 0, paddingRight: 0 }}
			className='bg-[var(--color-bg-secondary)]'
		>
			<ul
				ref={scrollContainerRef}
				className={`w-full flex flex-row items-center justify-center gap-2 overflow-hidden ${
					isDragging ? 'cursor-grabbing' : 'cursor-grab'
				}`}
				onScroll={handleScroll}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				style={{ userSelect: 'none' }}
			>
				{images.map((image, index) => (
					<li key={index} className='flex-shrink-0 max-w-[340px] min-w-[340px] aspect-16/9'>
						<img
							className='object-cover w-full h-full pointer-events-none'
							src={image.src}
							alt={image.alt}
							draggable={false}
						/>
					</li>
				))}
			</ul>
			<div className='flex flex-row items-center justify-center gap-12 h-[1rem]'>
				<img className='object-cover h-full' src='imgs/arrow--left.png' alt='' />
				<img src='/logo/logo-32x32.png' alt='' />
				<img className='object-cover h-full' src='imgs/arrow--right.png' alt='' />
			</div>
		</PageSection>
	);
}

export default Gallery;
