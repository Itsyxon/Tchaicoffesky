'use client'
import Modal from '@/components/Modal/Modal';
import data from '@/data/items';
import Image from 'next/image';
import React, { useState } from 'react';
import { IData } from '../../data/items';

const MenuPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [modalData, setModalData] = useState<null | IData>(null)
    return (
        <main className="bg-white">
            <section>
                <h1 className="text-4xl text-center">Наше меню</h1>
                <div className='p-16 grid grid-cols-3 gap-10'>
                    {data.map((item) => (
                        <div key={item.id} className='flex flex-col justify-center items-center text-center transition hover:shadow-lg'>
                            <Image src={item.image} width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-auto" alt={`item ${item.name}`} loading='lazy' />
                            <div className='border border-gray-200 w-full p-5 flex items-center flex-col gap-3 relative'>
                                <div className='text-2xl'>{item.name}</div>
                                <div className='text-xl'>{item.price}₽</div>
                                <button onClick={() => {
                                    setModalIsOpen(!modalIsOpen)
                                    setModalData(item)
                                }} className='p-2 border-white border-2 transition bg-orange-500 rounded text-white'>Подробнее</button>
                            </div>
                            {modalIsOpen ? <Modal setModalIsOpen={setModalIsOpen} modalData={modalData} modalIsOpen={modalIsOpen} /> : null}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MenuPage;