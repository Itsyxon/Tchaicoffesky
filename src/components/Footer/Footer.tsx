import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black text-white text-center p-5'>
            <p>Daniil Itsyxon</p>
            <Link href="https://github.com/Itsyxon" className='text-sm'>GitHub</Link>
        </footer>
    );
};

export default Footer;