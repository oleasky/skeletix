import React from 'react';
interface ButtonBaseProps {
    className?: string;
    children: React.ReactNode;
}
interface ButtonTypeProps extends ButtonBaseProps {
    type: 'button';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
interface LinkTypeProps extends ButtonBaseProps {
    type: 'link';
    href: string;
    newTab?: boolean;
}
type ButtonProps = ButtonTypeProps | LinkTypeProps;
export declare const Button: (props: ButtonProps) => React.JSX.Element;
export {};
