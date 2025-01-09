import React from 'react';
interface HeroProps {
    className?: string;
    title?: string;
    content?: string;
    imageUrl?: string;
    imageAlt?: string;
}
export declare const Hero: ({ className, title, content, imageUrl, imageAlt }: HeroProps) => React.JSX.Element;
export {};
