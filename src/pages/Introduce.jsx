import PageHeader from '../components/global/PageHeader';
import Features from '../components/pages/introduce/features/Features';
import Gallery from '../components/pages/introduce/gallery/Gallery';
import Summary from '../components/pages/introduce/summary/Summary';
import { ROUTES } from '../const/routes';

function Introduce() {
	return (
		<>
			<PageHeader
				paths={[
					{ name: 'Trang chủ', href: ROUTES.TRANG_CHU.href },
					{ name: 'Giới thiệu', href: ROUTES.GIOI_THIEU.href },
				]}
				bgImage='https://bizweb.dktcdn.net/100/442/533/themes/894892/assets/breadcrumb.png?1646900337410'
			/>
			<Features />
			<Gallery />
			<Summary />
		</>
	);
}

export default Introduce;
