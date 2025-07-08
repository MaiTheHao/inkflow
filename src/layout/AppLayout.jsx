import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function AppLayout() {
	return (
		<div className='flex flex-col w-full min-h-screen overflow-x-hidden'>
			<AppHeader />
			<Suspense
				fallback={
					<div className='flex items-center justify-center min-h-[200px] text-[var(--color-text-primary)]'>
						<div className='text-center'>
							<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)] mx-auto mb-4'></div>
							<p>Đang tải...</p>
						</div>
					</div>
				}
			>
				<AppBody>
					<Outlet />
				</AppBody>
			</Suspense>
			<AppFooter />
		</div>
	);
}

export default AppLayout;
