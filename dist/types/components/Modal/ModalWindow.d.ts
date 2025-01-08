import React from "react";
interface ModalElementProps {
    isOpen: boolean;
    modalContent: React.ReactNode;
    handleCloseModal: () => void;
    className?: string;
}
export declare const ModalWindow: ({ isOpen, modalContent, handleCloseModal, className }: ModalElementProps) => React.JSX.Element | null;
export {};
