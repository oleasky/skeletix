import React from 'react';
import { isBarestylesInstalled } from '../../utils/detectBarestyles';
export const Container = ({ htmlTag: Tag = 'div', id = '', className = '', layout = 'col', alignItems, justifyContent, width = 'full', children, }) => {
    const isBarestyles = isBarestylesInstalled();
    // Conditionally include classes based on `barestyles`
    const layoutClasses = layout === 'col' ? 'flex flex-col' : 'flex flex-col md:flex-row';
    let barestylesWidthClass = '';
    if (isBarestyles) {
        switch (width) {
            case 'full':
                barestylesWidthClass = 'max-w-full';
                break;
            case 'wide':
                barestylesWidthClass = 'max-w-wide';
                break;
            case 'narrow':
                barestylesWidthClass = 'max-w-narrow';
                break;
            default:
                barestylesWidthClass = 'max-w-default';
        }
    }
    const containerClasses = [
        id,
        barestylesWidthClass, // Only apply if `barestyles` is available
        layoutClasses,
        alignItems,
        justifyContent,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return React.createElement(Tag, { id: id, className: containerClasses }, children);
};
