import React from 'react';
interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}
export declare const Button: ({ children, onClick, className }: ButtonProps) => React.JSX.Element;
export {};
