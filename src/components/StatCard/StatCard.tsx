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
    classNames?:{
        card?: string;
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
        source?: string;
    },
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
    classNames = {}
}: StatCardData) => {
    const headingClasses = classNames.contentClasses?.heading || {};
    return (
        <article className={`flex-1 flex flex-col text-center py-fluid-xl px-fluid-xl bg-[#64748b] ${compId}${classNames.card ? ' ' + classNames.card : ''}`}>
            {statImage && (
                <figure className={`relative ${compId}__image${classNames.figureClasses?.root ? ' ' + classNames.figureClasses.root : ''}`}>
                    <Image
                        src={statImage.src}
                        alt={statImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        {...(classNames.figureClasses?.img ? { className: classNames.figureClasses.img } : {})}
                    />
                </figure>
            )}
            <div className={`${compId}__content${classNames.contentClasses?.root ? ' ' + classNames.contentClasses.root : ''}`}>
                <h2 className={headingClasses.root ? ' ' + headingClasses.root : ''}>
                    {statData.line1 && (
                        <span className={headingClasses.line1}>{statData.line1}</span>
                    )}
                    {statData.line2 && (
                        <span className={`block text-[1.7em]${headingClasses.line2 ? ' ' + headingClasses.line2 : ''}`}>{statData.line2}</span>
                    )}
                </h2>
                {statDescriptor && <p className={`font-h2${classNames.contentClasses?.descriptor ? ' ' + classNames.contentClasses.descriptor : ''}`}>{statDescriptor}</p>}
                {statSource && <small {...(classNames.source ? { className: classNames.source } : {})}>{statSource}</small>}
            </div>
        </article>
    )
}
