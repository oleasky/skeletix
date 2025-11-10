import Image from 'next/image';
import React from 'react';
import { Container } from '../../Container';
const compId = 'page-header';
export const PageHeader = ({ className, logoUrl, logoAlt, children, logoHeight, logoWidth }) => {
    let logoWidthSize = 'w-fluid-3xl';
    let logoHeightSize = 'h-fluid-lg';
    if (logoWidth) {
        logoWidthSize = `${logoWidth}`;
    }
    if (logoHeight) {
        logoHeightSize = `${logoHeight}`;
    }
    const logoClasses = [
        'block',
        'relative',
        logoHeightSize,
        logoWidthSize,
        `${compId}__logo`,
    ]
        .filter(Boolean)
        .join(' ');
    return (React.createElement(Container, { htmlTag: 'header', layout: 'row', alignItems: 'items-center', className: `flex p-fluid-sm bg-[#cbd5e1] ${compId} ${className}` },
        React.createElement(Container, { width: 'wide', className: 'mx-auto w-full' },
            logoUrl &&
                React.createElement("figure", { className: logoClasses },
                    React.createElement(Image, { src: logoUrl, alt: logoAlt || 'Logo Header', fill: true, priority: true })),
            children && React.createElement(Container, { className: 'flex items-center justify-between' }, children))));
};
