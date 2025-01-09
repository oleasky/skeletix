"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalWindow = void 0;
// components/Modal/ModalElement.tsx
const react_1 = __importStar(require("react"));
const Button_1 = require("../Button");
const ModalWindow = ({ isOpen, modalContent, handleCloseModal, className = '' }) => {
    // Hook to handle keydown event
    (0, react_1.useEffect)(() => {
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
    return (react_1.default.createElement("div", { className: `modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-70 z-50 flex justify-center items-center ${className}` },
        react_1.default.createElement("div", { className: "modal-content relative flex flex-col justify-end" },
            react_1.default.createElement(Button_1.Button, { className: "absolute top-4 right-4 close-modal ", type: "button", onClick: handleCloseModal }, "Close"),
            modalContent)));
};
exports.ModalWindow = ModalWindow;
