import React from 'react';
import type { StaticImageData } from 'next/image';
interface ImageCardProps {
    image?: string | StaticImageData;
    altText: string;
    title?: string;
    content?: string;
}
export declare const ImageCard: ({ image, altText, title, content }: ImageCardProps) => React.JSX.Element;
export {};
