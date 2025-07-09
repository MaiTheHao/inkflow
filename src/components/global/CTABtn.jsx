import { Link } from 'react-router-dom';

function CTABtn({ to, title, children, onClick, ...rest }) {
	const className = `relative cursor-pointer
            bg-[var(--color-primary)]
            text-[var(--color-text-header)]
            py-4 px-4
			active:scale-95
            hover:bg-[var(--color-primary-hover)] hover:text-[var(--color-text-header-hover)]
			rounded-sm
            `;
	const style = {
		transition: 'background-color 0.2s ease, color 0.2s ease, scale 0.1s ease',
	};

	if (to) {
		return (
			<Link className={className} style={style} to={to} title={title} {...rest}>
				{children}
			</Link>
		);
	}

	return (
		<button className={className} style={style} type='button' title={title} onClick={onClick} {...rest}>
			{children}
		</button>
	);
}

export default CTABtn;
