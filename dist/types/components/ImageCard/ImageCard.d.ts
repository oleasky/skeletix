import React from 'react';
import type { StaticImageData } from 'next/image';
interface ImageCardProps {
    image?: string | StaticImageData;
    altText: string;
    title?: string;
    content?: string;
    children?: React.ReactNode;
}
export declare const ImageCard: ({ image, altText, title, content, children }: ImageCardProps) => React.JSX.Element;
export {};
