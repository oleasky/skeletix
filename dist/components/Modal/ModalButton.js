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
const ModalWindow_1 = require("./ModalWindow");
const Button_1 = require("../Button");
const compId = "modal-button";
const ModalButton = ({ content, children, className = '' }) => {
    const { isOpen, modalContent, handleOpenModal, handleCloseModal } = (0, useModal_1.useModal)();
    const openCustomModal = () => {
        handleOpenModal(content);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `${compId} ${className}` },
            react_1.default.createElement(Button_1.Button, { type: "button", onClick: (e) => {
                    e.preventDefault();
                    openCustomModal();
                } }, children)),
        isOpen && react_dom_1.default.createPortal(react_1.default.createElement(ModalWindow_1.ModalWindow, { isOpen: isOpen, modalContent: modalContent, handleCloseModal: handleCloseModal }), document.body)));
};
exports.ModalButton = ModalButton;
