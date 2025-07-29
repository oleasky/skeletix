import React from 'react'
import Image from 'next/image'

interface StatCardData {
    statData?: {
        line1?: string;
        line2: string;
    }
    statDescriptor?: string;
    statSource?: string;
    statImage?: {
        src: string;
        alt: string;
    }
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

const compId = 'statistic-card'

export const StatCard = ({
    statData = {
        line1: '',
        line2: ''
    },
    statDescriptor,
    statSource,
    statImage,
    cardClassName = '',
    figureClasses = {},
    contentClasses = {},
    sourceClassName = ''
}: StatCardData) => {
    const headingClasses = contentClasses.heading || {};
    return (
        <article className={`flex-1 flex flex-col text-center py-fluid-xl px-fluid-xl bg-[#64748b] ${compId}${cardClassName ? ' ' + cardClassName : ''}`}>
            {statImage && (
                <figure className={`relative ${compId}__image${figureClasses.root ? ' ' + figureClasses.root : ''}`}>
                    <Image
                        src={statImage.src}
                        alt={statImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        {...(figureClasses.img ? { className: figureClasses.img } : {})}
                    />
                </figure>
            )}
            <div className={`${compId}__content${contentClasses.root ? ' ' + contentClasses.root : ''}`}>
                <h2 className={`text-fluid-xl${headingClasses.root ? ' ' + headingClasses.root : ''}`}>
                    {statData.line1 && (
                        <span className={headingClasses.line1}>{statData.line1}</span>
                    )}
                    {statData.line2 && (
                        <span className={`block text-[1.7em]${headingClasses.line2 ? ' ' + headingClasses.line2 : ''}`}>{statData.line2}</span>
                    )}
                </h2>
                {statDescriptor && <p className={`font-h2${contentClasses.descriptor ? ' ' + contentClasses.descriptor : ''}`}>{statDescriptor}</p>}
                {statSource && <small {...(sourceClassName ? { className: sourceClassName } : {})}>{statSource}</small>}
            </div>
        </article>
    )
}
