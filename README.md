# InkFlow - Tattoo Studio Website

InkFlow là một website hiện đại dành cho studio xăm hình, được xây dựng với React và Vite. Dự án mang đến trải nghiệm trực tuyến tuyệt vời cho khách hàng muốn tìm hiểu về dịch vụ xăm hình chuyên nghiệp.

> **📌 Lưu ý quan trọng**: Dự án này chỉ phát triển **GIAO DIỆN (Frontend)** và không bao gồm **BACKEND SERVER**. Đây là một static website showcasing UI/UX design cho tattoo studio.

## 🎨 Về Dự Án

InkFlow được thiết kế để tạo ra không gian nghệ thuật độc đáo, nơi xăm không chỉ là hình vẽ mà còn là dấu ấn cá nhân. Chúng tôi kể câu chuyện riêng của từng khách hàng thông qua nghệ thuật xăm hình.

## ✨ Tính Năng Chính

-   **Trang chủ động**: Video hero section với hiệu ứng chuyên nghiệp
-   **Nghệ sĩ nổi bật**: Giới thiệu các tattoo artist tài năng
-   **Bộ sưu tập xăm**: Showcase những tác phẩm nổi bật
-   **Quy trình làm việc**: Hướng dẫn chi tiết về quá trình xăm
-   **Câu chuyện thương hiệu**: Chia sẻ về sứ mệnh và tầm nhìn
-   **Giao diện responsive**: Tối ưu cho mọi thiết bị
-   **Thiết kế hiện đại**: UI/UX chuyên nghiệp với Tailwind CSS

## 🛠️ Công Nghệ Sử Dụng

-   **Frontend Framework**: React 19.1.0
-   **Build Tool**: Vite 7.0.2
-   **Styling**: Tailwind CSS 4.1.11
-   **Router**: React Router DOM 7.6.3
-   **Icons**: FontAwesome
-   **Fonts**: Custom fonts (Distillery, OpenDyslexic)

## 📁 Cấu Trúc Dự Án

```
src/
├── components/
│   ├── global/           # Component tái sử dụng
│   ├── layout/           # Header, Footer, Navigation
│   └── pages/home/       # Component cho trang chủ
├── const/                # Hằng số và cấu hình
├── layout/               # Layout chính của ứng dụng
├── pages/                # Các trang của website
└── utils/                # Utilities và helpers
```

## 🚀 Cài Đặt và Chạy Dự Án

### Yêu cầu hệ thống

-   Node.js (phiên bản 16+)
-   pnpm (khuyến nghị) hoặc npm

### Cài đặt dependencies

```bash
pnpm install
```

### Chạy development server

```bash
pnpm dev
```

### Build cho production

```bash
pnpm build
```

### Preview build

```bash
pnpm preview
```

### Lint code

```bash
pnpm lint
```

## 📱 Tính Năng Responsive

Website được thiết kế responsive hoàn toàn, tương thích với:

-   Desktop (1200px+)
-   Tablet (768px - 1199px)
-   Mobile (320px - 767px)

## 🎯 Mục Tiêu Dự Án

1. **Tạo trải nghiệm người dùng tuyệt vời**: Giao diện đẹp mắt, dễ sử dụng
2. **Giới thiệu thương hiệu chuyên nghiệp**: Xây dựng niềm tin với khách hàng
3. **Tăng tương tác**: Khuyến khích khách hàng liên hệ và đặt lịch
4. **Showcase nghệ thuật**: Trưng bày tác phẩm và tài năng của các nghệ sĩ

## 🔧 Development Guidelines

-   **Component Structure**: Sử dụng functional components với hooks
-   **Styling**: Tailwind CSS với custom CSS variables
-   **Code Quality**: ESLint cấu hình với React best practices
-   **Performance**: Lazy loading và optimized assets

## 📞 Liên Hệ

Đối với bất kỳ câu hỏi hoặc đề xuất nào về dự án, vui lòng liên hệ qua các kênh social media được cấu hình trong ứng dụng.
