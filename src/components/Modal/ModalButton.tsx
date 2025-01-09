"use client";
import React from "react";
import ReactDOM from "react-dom";
import { useModal } from "../../hooks/useModal";
import { ModalWindow } from "./ModalWindow";
import { Button } from "../Button";

interface ModalButtonProps {
    content: React.ReactNode; // The modal content to display
    children: React.ReactNode; // The button content (text, icon, etc.)
    className?: string; // Optional class for styling
}

const compId = "modal-button";

export const ModalButton = ({ content, children, className='' }: ModalButtonProps) => {
    const { isOpen, modalContent, handleOpenModal, handleCloseModal } = useModal();


    const openCustomModal = () => {
        handleOpenModal(content);
    };

    return (
        <>
            <div className={`${compId} ${className}`}>
                <Button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        openCustomModal(); 
                    }}
                >
                    {children}
                </Button>
            </div>

            {isOpen && ReactDOM.createPortal(
                <ModalWindow 
                    isOpen={isOpen} 
                    modalContent={modalContent} 
                    handleCloseModal={handleCloseModal}
                />, 
                document.body
            )}
        </>
    );
};