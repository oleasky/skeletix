"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalWindow = void 0;
// components/Modal/ModalElement.tsx
const react_1 = __importDefault(require("react"));
const Button_1 = require("../Button");
const ModalWindow = ({ isOpen, modalContent, handleCloseModal, className = '' }) => {
    if (!isOpen)
        return null;
    return (react_1.default.createElement("div", { className: `modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-70 z-50 flex justify-center items-center ${className}` },
        react_1.default.createElement("div", { className: "modal-content relative flex flex-col justify-end" },
            react_1.default.createElement(Button_1.Button, { className: "absolute top-4 right-4 close-modal ", type: "button", onClick: handleCloseModal }, "Close"),
            modalContent)));
};
exports.ModalWindow = ModalWindow;
