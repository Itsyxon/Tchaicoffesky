'use client'
import React, { useState } from 'react';
import { IData } from '../../data/items';
import MenuItems from '@/components/MenuItems/MenuItems';

const MenuPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [modalData, setModalData] = useState<null | IData>(null)
    return (
        <main className="bg-white">
            <section>
                <h1 className="text-4xl text-center">Наше меню</h1>
                <div>
                    <MenuItems modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} modalData={modalData} setModalData={setModalData} />
                </div>
            </section>
        </main>
    );
};

export default MenuPage;