import React from 'react';
interface StickyCtaProps {
    formId: string;
    offset?: number;
    label?: string;
    children?: React.ReactNode;
}
export declare const StickyCta: ({ formId, offset, children, label }: StickyCtaProps) => React.JSX.Element;
export {};
