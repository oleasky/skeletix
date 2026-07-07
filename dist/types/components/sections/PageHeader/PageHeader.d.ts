import React from 'react';
interface HeaderProps {
    className?: string;
    logoUrl?: string;
    logoAlt?: string;
    children?: React.ReactNode;
    logoWidth?: string;
    logoHeight?: string;
    quality?: number;
}
export declare const PageHeader: ({ className, logoUrl, logoAlt, children, logoHeight, logoWidth, quality }: HeaderProps) => React.JSX.Element;
export {};
