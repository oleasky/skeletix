import { useState } from "react";
export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
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
