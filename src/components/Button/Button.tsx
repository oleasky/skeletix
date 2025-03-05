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

const compId = 'btn';

export const Button = (props: ButtonProps) => {
    const { type, children, className = '' } = props;

    if (type === 'link') {
        const { href, newTab } = props; // Extract specific props for link
        return (
            <a
                href={href}
                target={newTab ? '_blank' : undefined}
                rel={newTab ? 'noopener noreferrer' : undefined}
                className={`p-4 text-[#FFFFFF] bg-[#64748b] rounded hover:bg-[#0f172a] ${compId} ${className}`}
            >
                <span className={`${compId}__text`}>{children}</span>
            </a>
        );
    }

    return (
        <button
            onClick={props.onClick}
            className={`px-4 py-2 text-[#FFFFFF] bg-[#64748b] rounded hover:bg-[#0f172a] ${compId} ${className}`}
        >
            <span className={`${compId}__text`}>{children}</span>
        </button>
    );
};
