"use client";
import React from "react";
import ReactDOM from "react-dom";
import { useModal } from "../../hooks/useModal";
import { ModalWindow } from "./ModalWindow";
import { Button } from "../Button";
const compId = "modal-button";
export const ModalButton = ({ content, children, className = '' }) => {
    const { isOpen, modalContent, handleOpenModal, handleCloseModal } = useModal();
    const openCustomModal = () => {
        handleOpenModal(content);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${compId} ${className}` },
            React.createElement(Button, { type: "button", onClick: (e) => {
                    e.preventDefault();
                    openCustomModal();
                } }, children)),
        isOpen && ReactDOM.createPortal(React.createElement(ModalWindow, { isOpen: isOpen, modalContent: modalContent, handleCloseModal: handleCloseModal }), document.body)));
};
