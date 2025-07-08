import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import { ROUTES } from './const/routes';
import Home from './pages/Home';

const GioiThieu = () => <div>Giới thiệu</div>;
const Portfolio = () => <div>Portfolio</div>;
const PortfolioNgheSi = () => <div>Portfolio Nghệ sĩ</div>;
const PortfolioTheLoai = () => <div>Portfolio Thể loại</div>;
const DatLich = () => <div>Đặt lịch</div>;
const Blog = () => <div>Blog</div>;
const BlogDetail = () => <div>Blog Detail</div>;
const LienHe = () => <div>Liên hệ</div>;
const FAQ = () => <div>FAQ</div>;

// Solution routes
const Solution = () => <div>Giải pháp</div>;
const SolutionMarketing = () => <div>Tiếp thị</div>;
const SolutionAnalytics = () => <div>Phân tích</div>;
const SolutionCommerce = () => <div>Thương mại</div>;
const SolutionInsights = () => <div>Thông tin chi tiết</div>;

// Support routes
const Support = () => <div>Hỗ trợ</div>;
const SupportPricing = () => <div>Giá cả</div>;
const SupportDocumentation = () => <div>Tài liệu</div>;
const SupportGuides = () => <div>Hướng dẫn</div>;
const SupportApiStatus = () => <div>Trạng thái API</div>;

// Company routes
const Company = () => <div>Công ty</div>;
const CompanyAbout = () => <div>Giới thiệu công ty</div>;
const CompanyBlog = () => <div>Blog công ty</div>;
const CompanyJobs = () => <div>Việc làm</div>;
const CompanyPress = () => <div>Báo chí</div>;

// Legal routes
const Legal = () => <div>Pháp lý</div>;
const LegalClaim = () => <div>Tuyên bố</div>;
const LegalPrivacy = () => <div>Quyền riêng tư</div>;
const LegalTerms = () => <div>Điều khoản</div>;

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path='/' element={<Home />} />
					<Route path={ROUTES.TRANG_CHU.href} element={<Home />} />
					<Route path={ROUTES.GIOI_THIEU.href} element={<GioiThieu />} />

					<Route path={ROUTES.PORTFOLIO.href} element={<Portfolio />} />
					<Route element={<PortfolioNgheSi />} path={ROUTES.PORTFOLIO.NGHE_SI().href} />
					<Route element={<PortfolioTheLoai />} path={ROUTES.PORTFOLIO.THE_LOAI().href} />

					<Route path={ROUTES.DAT_LICH.href} element={<DatLich />} />

					<Route path={ROUTES.BLOG.href} element={<Blog />} />
					<Route path={ROUTES.BLOG.DETAIL().href} element={<BlogDetail />} />

					<Route path={ROUTES.LIEN_HE.href} element={<LienHe />} />
					<Route path={ROUTES.FAQ.href} element={<FAQ />} />

					{/* Solution routes */}
					<Route path={ROUTES.SOLUTION.href} element={<Solution />} />
					<Route path={ROUTES.SOLUTION.MARKETING.href} element={<SolutionMarketing />} />
					<Route path={ROUTES.SOLUTION.ANALYTICS.href} element={<SolutionAnalytics />} />
					<Route path={ROUTES.SOLUTION.COMMERCE.href} element={<SolutionCommerce />} />
					<Route path={ROUTES.SOLUTION.INSIGHTS.href} element={<SolutionInsights />} />

					{/* Support routes */}
					<Route path={ROUTES.SUPPORT.href} element={<Support />} />
					<Route path={ROUTES.SUPPORT.PRICING.href} element={<SupportPricing />} />
					<Route path={ROUTES.SUPPORT.DOCUMENTATION.href} element={<SupportDocumentation />} />
					<Route path={ROUTES.SUPPORT.GUIDES.href} element={<SupportGuides />} />
					<Route path={ROUTES.SUPPORT.API_STATUS.href} element={<SupportApiStatus />} />

					{/* Company routes */}
					<Route path={ROUTES.COMPANY.href} element={<Company />} />
					<Route path={ROUTES.COMPANY.ABOUT.href} element={<CompanyAbout />} />
					<Route path={ROUTES.COMPANY.BLOG.href} element={<CompanyBlog />} />
					<Route path={ROUTES.COMPANY.JOBS.href} element={<CompanyJobs />} />
					<Route path={ROUTES.COMPANY.PRESS.href} element={<CompanyPress />} />

					{/* Legal routes */}
					<Route path={ROUTES.LEGAL.href} element={<Legal />} />
					<Route path={ROUTES.LEGAL.CLAIM.href} element={<LegalClaim />} />
					<Route path={ROUTES.LEGAL.PRIVACY.href} element={<LegalPrivacy />} />
					<Route path={ROUTES.LEGAL.TERMS.href} element={<LegalTerms />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
