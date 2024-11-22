import data, { IData } from '@/data/items';
import Image from 'next/image';
import React from 'react';
import Modal from '../Modal/Modal';

type Props = {
    modalIsOpen: boolean
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    modalData: null | IData
    setModalData: React.Dispatch<React.SetStateAction<IData | null>>
}

const MenuItems: React.FC<Props> = ({ modalIsOpen, setModalIsOpen, modalData, setModalData }) => {
    return (
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
    );
};

export default MenuItems;