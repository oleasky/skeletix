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
        <div className="modal-container modal__wrapper">
            <div className="modal-content">
                {modalContent}
                <button className="close-modal" type="button" onClick={handleCloseModal}>
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
