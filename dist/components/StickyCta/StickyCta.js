"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyCta = void 0;
const react_1 = __importDefault(require("react"));
// import { ModalButton } from './ModalButton';
// import { FormModal } from './FormModal';
const Container_1 = require("../Container");
const compId = 'sticky-cta';
const StickyCta = ({ formId, offset = 120, children }) => {
    const scrollToForm = () => {
        const formElement = document.getElementById(formId);
        if (formElement) {
            const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };
    return (react_1.default.createElement(Container_1.Container, { htmlTag: "div", className: `flex bg-slate-800 sticky bottom-0 p-4" alignItems="items-center ${compId}` },
        react_1.default.createElement("div", { className: `flex flex-col items-center justify-center ${compId}__content` },
            react_1.default.createElement("button", { onClick: scrollToForm, className: 'text-white' }, children))));
};
exports.StickyCta = StickyCta;
