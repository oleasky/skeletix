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
    className?: string;
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
    className = ''
}: StatCardData) => {
    return (
        <article className={`flex-1 flex flex-col text-center py-fluid-xl px-fluid-xl bg-[#64748b] ${compId} ${className}`}>
            {statImage && (
                <figure className={`relative ${compId}__image`}>
                    <Image
                        src={statImage.src}
                        alt={statImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </figure>
            )}
            <div className={`${compId}__content`}>
                <h2 className='text-fluid-xl'>
                    {statData?.line1} <span className='block text-[1.7em]'>{statData?.line2}</span>
                </h2>
                {statDescriptor && <p className='font-h2'>{statDescriptor}</p>}
                {statSource && <small>{statSource}</small>}
            </div>
        </article>
    )
}
