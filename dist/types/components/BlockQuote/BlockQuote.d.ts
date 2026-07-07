import React from 'react';
interface BlockquoteData {
    quote: string;
    author: string;
    gradYear?: number;
    authorTitle?: string;
    image?: {
        src: string;
    };
    imageAlt?: string;
    quality?: number;
    className?: string;
    figureClassName?: string;
}
export declare const BlockQuote: ({ quote, author, authorTitle, image, imageAlt, gradYear, quality, className, figureClassName }: BlockquoteData) => React.JSX.Element;
export {};
