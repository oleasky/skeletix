import React from 'react';
interface StatCardData {
    statData?: {
        line1: string;
        line2: string;
    };
    statDescriptor?: string;
    statSource?: string;
    statImage?: {
        src: string;
        alt: string;
    };
    className?: string;
}
export declare const StatCard: ({ statData, statDescriptor, statSource, statImage, className }: StatCardData) => React.JSX.Element;
export {};
