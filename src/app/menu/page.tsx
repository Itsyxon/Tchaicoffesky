'use client'
import React from 'react';
import data from '../../data/items';
import Image from 'next/image';
import CoffeeInfoModal from '../../components/Modals/CoffeeInfoModal'
import { useModal } from '@/context/ModalContext';

const MenuPage = () => {
    const { openModal } = useModal()
    return (
        <main className="bg-white">
            <section>
                <h1 className="text-4xl text-center">Наше меню</h1>
                <div>
                    <div className='p-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:p-16'>
                        {data.map((item) => (
                            <div key={item.id} className='flex flex-col justify-center items-center text-center transition hover:shadow-lg max-h-[500px]'>
                                <Image src={item.image} width="0"
                                    height="0"
                                    sizes="500px"
                                    className="w-full h-[250px]" alt={`item ${item.name}`} priority />
                                <div className='border border-gray-200 w-full p-5 flex items-center flex-col gap-3 relative'>
                                    <div className='text-2xl'>{item.name}</div>
                                    <div className='text-xl'>{item.price}₽</div>
                                    <button onClick={() => {
                                        openModal(<CoffeeInfoModal modalData={item} />)
                                    }} className='p-2 border-white border-2 transition bg-orange-500 rounded text-white'>Подробнее</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MenuPage;