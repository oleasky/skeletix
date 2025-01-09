// components/Modal/ModalElement.tsx
import React from "react";
import { Button } from "../Button";

interface ModalElementProps {
    isOpen: boolean;
    modalContent: React.ReactNode;
    handleCloseModal: () => void;
    className?: string;
}

export const ModalWindow = ({ isOpen, modalContent, handleCloseModal, className='' }: ModalElementProps) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-70 z-50 flex justify-center items-center ${className}`}>
            <div className="modal-content relative flex flex-col justify-end">
                <Button
                    className="absolute top-4 right-4 close-modal "
                    type="button"
                    onClick={handleCloseModal}
                >
                    Close
                </Button>
                {modalContent}
            </div>
        </div>
    );
};
