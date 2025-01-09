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
    className?: string;
}
export declare const BlockQuote: ({ quote, author, authorTitle, image, imageAlt, gradYear, className }: BlockquoteData) => React.JSX.Element;
export {};
