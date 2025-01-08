"use client"; // Marks this component as a client component

import React from 'react';
// import { ModalButton } from './ModalButton';
// import { FormModal } from './FormModal';
import { Container } from '../Container';

interface StickyCtaProps {
    formId: string;
    offset?: number;
    program?: string;
    children?: React.ReactNode;
}

export const StickyCta = ({ formId, offset = 120, children }:StickyCtaProps) => {
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
    return (
        <Container htmlTag="div" className="sticky-cta block bg-primary-black sticky bottom-0 p-fluid-xs" alignItems="items-center">
            <div className='wrapper centered'>
            <button onClick={scrollToForm}>
            {children}
            </button>
            </div>
        </Container>
    );
};
