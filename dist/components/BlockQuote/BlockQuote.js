import Image from 'next/image';
import React from 'react';
import { Container } from '../Container';
const compId = 'blockquote';
export const BlockQuote = ({ quote, author, authorTitle, image, imageAlt, gradYear, className }) => {
    return (React.createElement("blockquote", { className: `bg-[#f8fafc] relative w-full mx-auto  ${compId} ${className}` },
        image && (React.createElement("figure", { className: `relative w-[15rem] h-[18rem] mx-auto lg:w-full z-0 ${compId}__image` },
            React.createElement(Image, { src: image?.src || '', alt: imageAlt || '', fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1000px) 80vw, (max-width: 1280px) 70vw, 50vw", quality: 85, loading: 'lazy', className: 'object-cover object-center' }))),
        React.createElement("div", { className: `z-10 top-0 left-0 w-full h-full ${compId}__content` },
            React.createElement("div", null,
                React.createElement("p", { dangerouslySetInnerHTML: { __html: quote } })),
            React.createElement(Container, { layout: 'row', className: `gap-3 text-lg ${compId}__author` },
                React.createElement("span", null,
                    React.createElement("strong", null, author),
                    authorTitle && React.createElement("span", null,
                        ", ",
                        authorTitle),
                    gradYear && React.createElement("span", null,
                        ", ",
                        gradYear))))));
};
