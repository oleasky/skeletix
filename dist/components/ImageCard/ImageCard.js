import React from 'react';
import { Container } from '../Container';
import Image from 'next/image';
const compId = 'image-card';
export const ImageCard = ({ image, altText, title, content, children, className = '' }) => {
    return (React.createElement(Container, { htmlTag: "article", className: `md:flex-row bg-[#f1f5f9] ${compId} ${className}`, layout: 'row' },
        image && (React.createElement("figure", { className: 'flex-0 relative md:w-3/5' },
            React.createElement(Image, { src: typeof image === 'string' ? image : image.src, alt: altText, width: 800, height: 800 }))),
        React.createElement(Container, { htmlTag: "div", className: `flex-1 py-fluid-xl px-fluid-lg ${compId}__content` },
            React.createElement("h3", null, title),
            React.createElement("p", null, content),
            children)));
};
