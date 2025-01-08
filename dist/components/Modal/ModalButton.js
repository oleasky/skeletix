"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalButton = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const useModal_1 = require("../../hooks/useModal");
const ModalButton = ({ content, children, className }) => {
    const { isOpen, modalContent, handleOpenModal, handleCloseModal } = (0, useModal_1.useModal)();
    const openCustomModal = () => {
        handleOpenModal(content);
    };
    const modalElement = isOpen ? (react_1.default.createElement("div", { className: "modal-container modal__wrapper" },
        react_1.default.createElement("div", { className: "modal-content" },
            modalContent,
            react_1.default.createElement("button", { className: "close-modal", type: "button", onClick: handleCloseModal }, "Close")))) : null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `modal-trigger ${className}` },
            react_1.default.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    openCustomModal();
                } }, children)),
        isOpen && react_dom_1.default.createPortal(modalElement, document.body)));
};
exports.ModalButton = ModalButton;
