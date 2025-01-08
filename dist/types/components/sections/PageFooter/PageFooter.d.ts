import React from 'react';
interface FooterProps {
    name?: string;
    phone?: string;
    address?: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    branding?: {
        logoFooter: string;
        logoAlt: string;
    };
    helpContent?: React.ReactNode;
    privacyContent?: React.ReactNode;
    className?: string;
}
export declare const PageFooter: ({ name, phone, address, branding, helpContent, privacyContent, className }: FooterProps) => React.JSX.Element;
export {};
