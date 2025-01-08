"use client";
import React from "react";
import ReactDOM from "react-dom";
import { useModal } from "../../hooks/useModal";

interface ModalButtonProps {
    content: React.ReactNode; // The modal content to display
    children: React.ReactNode; // The button content (text, icon, etc.)
    className?: string; // Optional class for styling
}

export const ModalButton = ({ content, children, className }: ModalButtonProps) => {
    const { isOpen, modalContent, handleOpenModal, handleCloseModal } = useModal();


    const openCustomModal = () => {
        handleOpenModal(content);
    };

    const modalElement = isOpen ? (
        <div className="modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center">
            <div className="modal-content ">
                {modalContent}
                <button className="block p-4 bg-yellow-500 absolute -top-4 right-0 close-modal" type="button" onClick={handleCloseModal}>
                    Close
                </button>
            </div>
        </div>
    ) : null;

    return (
        <>
            <div className={`modal-trigger ${className}`}>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        openCustomModal(); 
                    }}
                >
                    {children}
                </a>
            </div>

            {isOpen && ReactDOM.createPortal(modalElement, document.body)}
        </>
    );
};
