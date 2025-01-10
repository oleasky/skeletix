import React from 'react';
interface HeroProps {
    className?: string;
    title?: string;
    content?: string;
    imageUrl?: string;
    imageAlt?: string;
    children?: React.ReactNode;
}
export declare const Hero: ({ className, title, content, imageUrl, imageAlt, children }: HeroProps) => React.JSX.Element;
export {};
