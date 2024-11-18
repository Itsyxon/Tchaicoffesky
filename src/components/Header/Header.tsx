import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {

    return (
        <header className='text-black w-full shadow-xl bg-white'>
            <nav className='flex items-center justify-around'>
                <Link href='/'><Image src='/logo.png' width={100} height={100} alt="logo" /></Link>
                <ul className='flex gap-3'>
                    <li><Link className='transition hover:text-orange-500' href='/'>Главная</Link></li>
                    <li><Link className='transition hover:text-orange-500' href='/menu'>Меню</Link></li>
                    <li><Link className='transition hover:text-orange-500' href='/about'>О нас</Link></li>
                    <li><Link className='transition hover:text-orange-500' href='/contact'>Контакты</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;