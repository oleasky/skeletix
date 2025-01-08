"use client";
import React from "react";
import ReactDOM from "react-dom";
import { useModal } from "../../hooks/useModal";
import { ModalWindow } from "./ModalWindow";

interface ModalButtonProps {
    content: React.ReactNode; // The modal content to display
    children: React.ReactNode; // The button content (text, icon, etc.)
    className?: string; // Optional class for styling
}

const compId = "modal-button";

export const ModalButton = ({ content, children, className }: ModalButtonProps) => {
    const { isOpen, modalContent, handleOpenModal, handleCloseModal } = useModal();


    const openCustomModal = () => {
        handleOpenModal(content);
    };

    return (
        <>
            <div className={`modal-trigger ${className} ${compId}`}>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        openCustomModal(); 
                    }}
                    className={`hover:scale-110 transition-all ease-in m-24 block bg-slate-700 text-white w-fit p-4 ${compId}__btn`}
                >
                    {children}
                </button>
            </div>

            {isOpen && ReactDOM.createPortal(
                <ModalWindow 
                    isOpen={isOpen} 
                    modalContent={modalContent} 
                    handleCloseModal={handleCloseModal} 
                    className={`${compId}__content`} 
                />, 
                document.body
            )}
        </>
    );
};


// const modalElement = isOpen ? (
//     <div className="modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center">
//         <div className="modal-content relative">
//             {modalContent}
//             <button className="block p-4 bg-slate-900 text-white absolute top-0 -translate-y-full right-0 close-modal" type="button" onClick={handleCloseModal}>
//                 Close
//             </button>
//         </div>
//     </div>
// ) : null;