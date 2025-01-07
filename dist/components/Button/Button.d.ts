import React from 'react';
interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}
export declare const Button: ({ label, onClick, className }: ButtonProps) => React.JSX.Element;
export {};
