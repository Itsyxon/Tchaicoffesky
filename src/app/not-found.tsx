'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFoundPage = () => {

    const router = useRouter()

    const goToMainHandler = () => {
        router.push('/')
    }

    return (
        <div className='bg-white h-[48.5rem] flex items-center justify-center flex-col'>
            <h1 className="text-3xl text-center">Упс. Страница не найдена</h1>
            <Image src={'/coffee.svg'} width={50} height={50} alt='coffee' />
            <button onClick={goToMainHandler} className="p-2 border-2 border-black text-black">Вернуться на главную</button>
        </div>
    );
};

export default NotFoundPage;