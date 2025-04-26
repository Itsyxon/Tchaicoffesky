'use client'
import { useModal } from '@/context/ModalContext';
import { IData } from '@/data/items';
import Image from 'next/image';
import React from 'react';

type Props = {
    modalData: IData | null
}

const CoffeeInfoModal: React.FC<Props> = ({ modalData }) => {
    const { closeModal } = useModal()
    console.log(modalData)
    return (
        <div onClick={closeModal} className='modal-overlay'>
            <div onClick={(e) => e.stopPropagation()} className='modal-content relative'>
                <div onClick={closeModal} className='font-bold cursor-pointer absolute right-5 top-3 text-2xl'>✖</div>
                <div className='flex flex-col items-center gap-12 lg:flex-row lg:justify-between'>
                    <Image src={modalData!.image} width={500} height={500} sizes='' alt={modalData!.name} className='object-contain' loading='lazy' />
                    <div className='flex-1'>
                        <div className='text-3xl mb-4 max-w-fit'>{modalData?.name}</div>
                        <div className='text-lg'>{modalData?.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeInfoModal;