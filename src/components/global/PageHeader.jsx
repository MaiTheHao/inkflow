import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader({ paths, bgImage = '' }) {
	return (
		<div className='relative w-full min-h-[10rem] md:min-h-[15rem] lg:min-h-[22rem] flex flex-row items-end justify-between overflow-hidden'>
			<div className='absolute inset-0 bg-(--color-bg-tertiary) flex flex-row items-center justify-center text-gray-700'>
				{bgImage ? (
					<>
						<img src={bgImage} alt='' className='object-cover w-full h-full ' />
						<div className='absolute inset-0 bg-black opacity-60'></div>
					</>
				) : (
					'Background image here!!!'
				)}
			</div>
			<div
				className='absolute inset-0  z-10
				flex flex-col justify-end items-center gap-4
				p-8
				'
			>
				<span
					className='
					text-2xl md:text-3xl font-bold font-title text-(--color-text-header) text-center tracking-[.25em]
					'
				>
					{paths[paths.length - 1].name}
				</span>
				<ul
					className='flex items-center gap-2
					text-(--color-text-paragraph)
					text-sm md:text-base
					'
				>
					{paths.map((path, index) => {
						const isLast = index === paths.length - 1;
						return (
							<React.Fragment key={index}>
								{index > 0 && <li className='mx-1 flex flex-row items-center justify-center'>{'>'}</li>}
								<li className={`inline-block ${isLast ? 'text-(--color-text-muted)' : ''}`}>
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
