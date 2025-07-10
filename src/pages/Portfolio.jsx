import React from 'react';
import PageHeader from '../components/global/PageHeader';
import { ROUTES } from '../const/routes';
import ListTattoos from '../components/pages/portfolio/ListTattoos';
import TattooStory from '../components/pages/portfolio/TattooStory';

function Portfolio() {
	return (
		<>
			<PageHeader
				paths={[
					{ name: 'Trang chủ', href: ROUTES.TRANG_CHU.href },
					{ name: 'Tác phẩm', href: ROUTES.PORTFOLIO.href },
				]}
				bgImage='https://bizweb.dktcdn.net/100/442/533/themes/894892/assets/breadcrumb.png?1646900337410'
			/>
			<ListTattoos />
			<TattooStory />
		</>
	);
}

export default Portfolio;
