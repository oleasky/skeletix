"use client"; // Marks this component as a client component

import React from 'react';
// import { ModalButton } from './ModalButton';
// import { FormModal } from './FormModal';
import { Container } from '../Container';

interface StickyCtaProps {
    formId: string;
    offset?: number;
    label?: string;
    children?: React.ReactNode;
}

const compId = 'sticky-cta';

export const StickyCta = ({ formId, offset = 120, children, label }:StickyCtaProps) => {
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
        <Container htmlTag="div" className={`flex bg-slate-800 sticky bottom-0 p-fluid-xs" alignItems="items-center ${compId}`}>
            <div className={`p-fluid-lg ${compId}__content`}>
                {label && <p>{label}</p>}
                <button onClick={scrollToForm} className='text-white'>
                    {children}
                </button>
            </div>
        </Container>
    );
};
