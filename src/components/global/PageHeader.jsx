import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader({ paths, bgImage = '' }) {
	return (
		<div className='relative w-full min-h-[10rem] md:min-h-[15rem] lg:min-h-[20rem] flex flex-row items-end justify-between overflow-hidden'>
			<div className='absolute inset-0 bg-(--color-bg-tertiary) flex flex-row items-center justify-center text-gray-700'>
				{bgImage ? (
					<img src={bgImage} alt='' className='object-cover w-full h-full' />
				) : (
					'Background image here!!!'
				)}
			</div>
			<div
				className='relative w-full z-10
                pb-6
                flex flex-col justify-center items-center gap-4'
			>
				<span
					className='
                    text-3xl md:text-5xl font-bold font-title text-gray-100 text-center tracking-[.25em]
                    '
				>
					{paths[paths.length - 1].name}
				</span>
				<ul
					className='flex items-center gap-2
                    text-gray-300
                    text-sm md:text-base
                    '
				>
					{paths.map((path, index) => {
						const isLast = index === paths.length - 1;
						return (
							<React.Fragment key={index}>
								{index > 0 && (
									<li className='mx-1 text-gray-300 flex flex-row items-center justify-center'>
										{'>'}
									</li>
								)}
								<li className={`inline-block ${isLast ? 'text-[rgba(255,255,255,0.5)]' : ''}`}>
									{isLast ? (
										<span>{path.name}</span>
									) : (
										<Link to={path.href} className='hover:underline'>
											{path.name}
										</Link>
									)}
								</li>
							</React.Fragment>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default PageHeader;
