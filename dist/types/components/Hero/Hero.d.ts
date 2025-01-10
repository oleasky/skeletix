import React from 'react';
import { StaticImageData } from 'next/image';
interface HeroProps {
    className?: string;
    title?: string;
    content?: string;
    imageUrl?: string | StaticImageData;
    imageAlt?: string;
    children?: React.ReactNode;
}
export declare const Hero: ({ className, title, content, imageUrl, imageAlt, children }: HeroProps) => React.JSX.Element;
export {};
