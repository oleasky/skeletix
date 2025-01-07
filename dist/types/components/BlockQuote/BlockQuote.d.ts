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
}
export declare const BlockQuote: ({ quote, author, authorTitle, image, imageAlt }: BlockquoteData) => React.JSX.Element;
export {};
