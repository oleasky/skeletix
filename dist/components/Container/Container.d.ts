import React from 'react';
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
export declare const Container: ({ htmlTag: Tag, id, className, layout, alignItems, justifyContent, width, children, }: ContainerProps) => React.JSX.Element;
export {};
