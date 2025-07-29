import React from 'react';
interface StatCardData {
    statData?: {
        line1?: string;
        line2: string;
    };
    statDescriptor?: string;
    statSource?: string;
    statImage?: {
        src: string;
        alt: string;
    };
    cardClassName?: string;
    figureClasses?: {
        root?: string;
        img?: string;
    };
    contentClasses?: {
        root?: string;
        descriptor?: string;
        heading?: {
            root?: string;
            line1?: string;
            line2?: string;
        };
    };
    sourceClassName?: string;
}
export declare const StatCard: ({ statData, statDescriptor, statSource, statImage, cardClassName, figureClasses, contentClasses, sourceClassName }: StatCardData) => React.JSX.Element;
export {};
