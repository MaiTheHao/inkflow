import { memo } from 'react';

const DesktopColumn = memo(function DesktopColumn({ children }) {
	return <div className='flex-1 flex flex-col items-center gap-2'>{children}</div>;
});

export default DesktopColumn;
