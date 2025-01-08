import { useState } from "react";

interface UseModalReturnType {
  isOpen: boolean;
  modalContent: React.ReactNode;
  handleOpenModal: (content: React.ReactNode) => void;
  handleCloseModal: () => void;
}

export const useModal = (): UseModalReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpenModal = (content: React.ReactNode) => {
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
