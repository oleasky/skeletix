import React from 'react';
import { StaticImageData } from 'next/image';
interface HeroProps {
    className?: string;
    title?: string;
    content?: string;
    imageUrl?: string | StaticImageData;
    imageAlt?: string;
    quality?: number;
    children?: React.ReactNode;
}
export declare const Hero: ({ className, title, content, imageUrl, imageAlt, quality, children }: HeroProps) => React.JSX.Element;
export {};
