import { IData } from '@/data/items';
import Image from 'next/image';
import React, { useMemo } from 'react';

type Props = {
    modalData: IData | null
    modalIsOpen: boolean
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<Props> = ({ modalData, setModalIsOpen, modalIsOpen }) => {

    if (modalIsOpen) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'auto'
    }

    const scrollY = useMemo(() => {
        return window.scrollY
    }, [])

    return (
        <div onClick={() => {
            setModalIsOpen(false)
            document.body.style.overflowY = 'auto'
        }} className={`absolute w-full h-full bg-shadow left-0`} style={{ top: `${scrollY}px` }}>
            <div onClick={(e) => e.stopPropagation()} className={`w-8/12 h-fit p-10 relative left-80 z-30 top-44 bg-white`}>
                <div onClick={() => {
                    setModalIsOpen(false)
                    document.body.style.overflowY = 'auto'
                }} className='font-bold cursor-pointer absolute right-5 top-3 text-2xl'>✖</div>
                <div className='flex justify-between items-center gap-4'>
                    <Image src={modalData!.image} width={500} height={500} alt={modalData!.name} className='object-contain' />
                    <div className='flex-1'>
                        <div className='text-3xl mb-4'>{modalData?.name}</div>
                        <div className='text-lg'>{modalData?.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;