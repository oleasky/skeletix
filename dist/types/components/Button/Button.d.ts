import React from 'react';
interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}
export declare const Button: ({ children, onClick, className }: ButtonProps) => React.JSX.Element;
export {};
