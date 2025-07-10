import React from 'react';

function FAQcard({ question, answers, className = '', style = {} }) {
	const [open, setOpen] = React.useState(false);

	return (
		<details
			open={open}
			className={`
                px-4 py-2 rounded-md border-2
                h-max
                ${open ? 'border-[var(--color-primary)] shadow-lg' : 'border-transparent'}
                bg-white transition-all duration-200
                hover:shadow-md hover:border-[var(--color-text-primary)]
                active:scale-[0.98]
                ${className}
                w-full max-w-xl mx-auto
            `}
			style={style}
			onClick={(e) => {
				e.preventDefault();
				setOpen((prev) => !prev);
			}}
		>
			<summary
				className='flex flex-row items-center justify-between gap-4 cursor-pointer select-none'
				style={{ listStyle: 'none' }}
			>
				<p className='text-gray-800 font-medium transition-colors duration-150 group-hover:text-[var(--color-primary)] text-base sm:text-lg md:text-xl'>
					{question}
				</p>
				<span
					className={`
                        text-lg font-bold
                        text-[1.25em]
                        text-[var(--color-primary)]
                        aspect-1/1 h-max w-max
                        transition-transform duration-200
                        group-hover:scale-125 group-hover:text-[var(--color-primary-hover)]
                        active:scale-110
                    `}
				>
					{open ? '-' : '+'}
				</span>
			</summary>
			{open && (
				<>
					<div className='h-[1px] my-2 w-full bg-gray-200'></div>
					<ul className='text-xs sm:text-sm md:text-base flex flex-col gap-2 pl-2'>
						{answers.map((answer, index) => (
							<li key={index} className='text-gray-500'>
								- {answer}
							</li>
						))}
					</ul>
				</>
			)}
		</details>
	);
}

export default FAQcard;
