import React from 'react';
import { Container } from '../Container';
const compId = 'modal';
export const ModalContent = ({ className = '', children }) => {
    return (React.createElement(Container, { id: "modal", className: `bg-white px-fluid-md py-fluid-lg shadow-lg max-h-[90vh] max-w-[90vw] overflow-auto ${compId}__window ${className}` }, children));
};
