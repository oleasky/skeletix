import React from 'react';
import { isBarestylesInstalled } from '../../utils/detectBarestyles';

interface ContainerProps {
    htmlTag?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer';
    id?: string;
    className?: string;
    layout?: 'col' | 'row';
    alignItems?: 'items-center' | 'items-start' | 'items-end' | 'items-stretch' | 'items-baseline';
    justifyContent?: 'justify-center' | 'justify-start' | 'justify-end' | 'justify-between' | 'justify-around' | 'justify-evenly' | 'justify-stretch';
    width?: 'full' | 'wide' | 'narrow';
    children: React.ReactNode;
}

export const Container = ({
    htmlTag: Tag = 'div',
    id = '',
    className = '',
    layout = 'col',
    alignItems,
    justifyContent,
    width = 'full',
    children,
}: ContainerProps) => {
    const isBarestyles = isBarestylesInstalled();

    // Conditionally include classes based on `barestyles`
    const layoutClasses = layout === 'col' ? 'flex flex-col' : 'flex flex-row';
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

    return <Tag id={id} className={containerClasses}>{children}</Tag>;
};
