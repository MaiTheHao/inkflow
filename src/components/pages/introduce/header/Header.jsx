import PageHeader from '../../../global/PageHeader';
import { ROUTES } from '../../../../const/routes';

function Header() {
	return (
		<PageHeader
			paths={[
				{ name: 'Trang chủ', href: ROUTES.TRANG_CHU.href },
				{ name: 'Giới thiệu', href: ROUTES.GIOI_THIEU.href },
			]}
			bgImage='https://i.pinimg.com/originals/4d/c0/59/4dc0593899acc8dcb1ef8bd91af01841.png'
		/>
	);
}

export default Header;
