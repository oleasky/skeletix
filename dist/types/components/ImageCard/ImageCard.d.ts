import React from 'react';
import type { StaticImageData } from 'next/image';
interface ImageCardProps {
    image?: string | StaticImageData;
    altText: string;
    title?: string;
    content?: string;
    children?: React.ReactNode;
    className?: string;
}
export declare const ImageCard: ({ image, altText, title, content, children, className }: ImageCardProps) => React.JSX.Element;
export {};
