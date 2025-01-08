interface UseModalReturnType {
    isOpen: boolean;
    modalContent: React.ReactNode;
    handleOpenModal: (content: React.ReactNode) => void;
    handleCloseModal: () => void;
}
export declare const useModal: () => UseModalReturnType;
export {};
