// components/Modal/ModalElement.tsx
import React from "react";

interface ModalElementProps {
    isOpen: boolean;
    modalContent: React.ReactNode;
    handleCloseModal: () => void;
    className?: string;
}

export const ModalWindow = ({ isOpen, modalContent, handleCloseModal, className='' }: ModalElementProps) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center ${className}`}>
            <div className="modal-content relative">
                {modalContent}
                <button
                    className="block p-4 bg-slate-900 text-white absolute top-0 -translate-y-full right-0 close-modal"
                    type="button"
                    onClick={handleCloseModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};
