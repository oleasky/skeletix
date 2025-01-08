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
const compId = "modal-button";
const ModalButton = ({ content, children, className }) => {
    const { isOpen, modalContent, handleOpenModal, handleCloseModal } = (0, useModal_1.useModal)();
    const openCustomModal = () => {
        handleOpenModal(content);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `modal-trigger ${className} ${compId}` },
            react_1.default.createElement("button", { onClick: (e) => {
                    e.preventDefault();
                    openCustomModal();
                }, className: `hover:scale-110 transition-all ease-in m-24 block bg-slate-700 text-white w-fit p-4 ${compId}__btn` }, children)),
        isOpen && react_dom_1.default.createPortal(react_1.default.createElement(ModalWindow_1.ModalWindow, { isOpen: isOpen, modalContent: modalContent, handleCloseModal: handleCloseModal, className: `${compId}__content` }), document.body)));
};
exports.ModalButton = ModalButton;
// const modalElement = isOpen ? (
//     <div className="modal-container modal__wrapper fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center">
//         <div className="modal-content relative">
//             {modalContent}
//             <button className="block p-4 bg-slate-900 text-white absolute top-0 -translate-y-full right-0 close-modal" type="button" onClick={handleCloseModal}>
//                 Close
//             </button>
//         </div>
//     </div>
// ) : null;
