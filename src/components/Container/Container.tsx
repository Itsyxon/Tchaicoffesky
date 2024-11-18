import React from 'react';

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='container mx-auto px-20'>
            {children}
        </div>
    );
};
