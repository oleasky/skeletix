import Image from 'next/image'
import React from 'react'
import { Container } from '../Container'

interface BlockquoteData {
    quote: string,
    author: string,
    gradYear?: number,
    authorTitle?: string,
    image?: {
        src: string,
    }
    imageAlt?: string
    className?: string
}

const compId = 'blockquote'

export const BlockQuote = ({ quote, author, authorTitle, image, imageAlt, gradYear, className }: BlockquoteData) => {
    return (
        <blockquote className={`bg-[#f8fafc] relative w-full mx-auto p-fluid-lg ${compId} ${className}`}>
            {image && (
                <figure className={`relative w-[15rem] h-[18rem] mx-auto lg:w-full lg:h-full z-0 ${compId}__image`}>
                    <Image
                        src={image?.src || ''}
                        alt={imageAlt || ''}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='object-cover object-center'
                    />
                </figure>
            )}
            <div className='z-10 top-0 left-0 w-full h-full'>
                <div className={`${compId}__content`}>
                    <p dangerouslySetInnerHTML={{ __html: quote }} />
                </div>
                <Container 
                    layout='row'
                    className={`gap-3 text-lg ${compId}author`}>
                    <span>
                        <strong>{author},</strong>{authorTitle && <span> {authorTitle}</span>}{gradYear && <span>, {gradYear}</span>}
                    </span>
                </Container>
            </div>
        </blockquote>
    )
}
