import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

export const Button = ({ label, onClick, className = '' }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-white bg-blue-500 rounded ${className}`}
        >
            {label}
        </button>
    );
};
