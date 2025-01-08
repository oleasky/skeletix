import React from 'react';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const compId = 'btn'

export const Button = ({children, onClick, className = ''}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-white bg-slate-600 rounded ${compId} ${className}`}
        >
            <span className={`${compId}__text`}>
                {children}
            </span>
        </button>
    );
};
