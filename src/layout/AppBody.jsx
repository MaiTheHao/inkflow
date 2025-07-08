import React from 'react';

function AppBody({ children }) {
	return <main className='relative flex flex-col items-center justify-start w-full flex-1 min-h-0'>{children}</main>;
}

export default AppBody;
