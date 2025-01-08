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
const compId = "modal-button";
const ModalButton = ({ content, children, className }) => {
    const { isOpen, modalContent, handleOpenModal, handleCloseModal } = (0, useModal_1.useModal)();
    const openCustomModal = () => {
        handleOpenModal(content);
    };
    const modalElement = isOpen ? (react_1.default.createElement("div", { className: "modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center" },
        react_1.default.createElement("div", { className: "modal-content relative" },
            modalContent,
            react_1.default.createElement("button", { className: "block p-4 bg-slate-900 text-white absolute top-0 -translate-y-full right-0 close-modal", type: "button", onClick: handleCloseModal }, "Close")))) : null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `modal-trigger ${compId}` },
            react_1.default.createElement("button", { onClick: (e) => {
                    e.preventDefault();
                    openCustomModal();
                }, className: `${compId}__btn ${className}` }, children)),
        isOpen && react_dom_1.default.createPortal(modalElement, document.body)));
};
exports.ModalButton = ModalButton;
