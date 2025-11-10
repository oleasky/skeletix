'use client';
// components/Modal/ModalElement.tsx
import React, { useEffect } from "react";
import { Button } from "../Button";
export const ModalWindow = ({ isOpen, modalContent, handleCloseModal, className = '' }) => {
    // Hook to handle keydown event
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleCloseModal(); // Close modal on "Esc" key press
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown); // Cleanup event listener
        };
    }, [isOpen, handleCloseModal]);
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: `modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-70 z-50 flex justify-center items-center ${className}` },
        React.createElement("div", { className: "modal-content relative flex flex-col justify-end" },
            React.createElement(Button, { className: "absolute top-4 right-4 close-modal ", type: "button", onClick: handleCloseModal }, "Close"),
            modalContent)));
};
