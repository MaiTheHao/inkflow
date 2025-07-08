export const ROUTES = {
	TRANG_CHU: { href: '/trang-chu', label: 'Trang chủ' },
	GIOI_THIEU: { href: '/gioi-thieu', label: 'Giới thiệu' },
	PORTFOLIO: {
		href: '/portfolio',
		label: 'Portfolio',
		ROOT: { href: '/portfolio', label: 'Portfolio', rel: '' },
		NGHE_SI: (ten = ':ten') => ({ href: `/portfolio/nghe-si/${ten}`, label: 'Nghệ sĩ', rel: `nghe-si/${ten}` }),
		THE_LOAI: (ten = ':ten') => ({ href: `/portfolio/the-loai/${ten}`, label: 'Thể loại', rel: `the-loai/${ten}` }),
	},
	DAT_LICH: { href: '/dat-lich', label: 'Đặt lịch' },
	BLOG: {
		href: '/blog',
		label: 'Blog',
		ROOT: { href: '/blog', label: 'Blog', rel: '' },
		DETAIL: (slug = ':slug') => ({ href: `/blog/${slug}`, label: 'Chi tiết Blog', rel: `${slug}` }),
	},
	LIEN_HE: { href: '/lien-he', label: 'Liên hệ' },
	FAQ: { href: '/faq', label: 'FAQ' },

	// Các route chưa được thống nhất
	SOLUTION: {
		href: '/solution',
		label: 'Giải pháp',
		MARKETING: { href: '/solution/marketing', label: 'Marketing', rel: 'marketing' },
		ANALYTICS: { href: '/solution/analytics', label: 'Analytics', rel: 'analytics' },
		COMMERCE: { href: '/solution/commerce', label: 'Commerce', rel: 'commerce' },
		INSIGHTS: { href: '/solution/insights', label: 'Insights', rel: 'insights' },
	},
	SUPPORT: {
		href: '/support',
		label: 'Hỗ trợ',
		PRICING: { href: '/support/pricing', label: 'Giá cả', rel: 'pricing' },
		DOCUMENTATION: { href: '/support/documentation', label: 'Tài liệu', rel: 'documentation' },
		GUIDES: { href: '/support/guides', label: 'Hướng dẫn', rel: 'guides' },
		API_STATUS: { href: '/support/api-status', label: 'Trạng thái API', rel: 'api-status' },
	},
	COMPANY: {
		href: '/company',
		label: 'Công ty',
		ABOUT: { href: '/company/about', label: 'Giới thiệu', rel: 'about' },
		BLOG: { href: '/company/blog', label: 'Blog', rel: 'blog' },
		JOBS: { href: '/company/jobs', label: 'Việc làm', rel: 'jobs' },
		PRESS: { href: '/company/press', label: 'Báo chí', rel: 'press' },
	},
	LEGAL: {
		href: '/legal',
		label: 'Pháp lý',
		CLAIM: { href: '/legal/claim', label: 'Tuyên bố', rel: 'claim' },
		PRIVACY: { href: '/legal/privacy', label: 'Quyền riêng tư', rel: 'privacy' },
		TERMS: { href: '/legal/terms', label: 'Điều khoản', rel: 'terms' },
	},
};
