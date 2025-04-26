'use client'
import React, { createContext, useContext, useState } from 'react';

type ModalContextType = {
    openModal: (content: React.ReactNode) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (content: React.ReactNode) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {modalContent}
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModal должен быть использован вместе с ModalProvider!');
    return context;
};