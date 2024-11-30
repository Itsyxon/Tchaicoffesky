import React from 'react';

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='xl:container xl:mx-auto xl:px-20'>
            {children}
        </div>
    );
};
