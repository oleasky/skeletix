"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = void 0;
const react_1 = require("react");
const useModal = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [modalContent, setModalContent] = (0, react_1.useState)(null);
    const handleOpenModal = (content) => {
        setIsOpen(true);
        setModalContent(content);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };
    return {
        isOpen,
        modalContent,
        handleOpenModal,
        handleCloseModal,
    };
};
exports.useModal = useModal;
