"use client"; 

import React from 'react';
// import { ModalButton } from './ModalButton';
// import { FormModal } from './FormModal';
import { Container } from '../Container';

interface StickyCtaProps {
    formId: string;
    offset?: number;
    children?: React.ReactNode;
}

const compId = 'sticky-cta';

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
        <Container 
            htmlTag="div" 
            className={`flex bg-[#334155] sticky bottom-0 p-fluid-sm ${compId}`} 
            alignItems="items-center"
        >
            <div className={`flex flex-col items-center justify-center ${compId}__content`}>
                <button onClick={scrollToForm} className='text-[#FFFFFF]'>
                    {children}
                </button>
            </div>
        </Container>
    );
};
