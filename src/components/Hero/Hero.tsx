import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Container } from '../../components/Container'

interface HeroProps {
    className?: string;
    title?: string;
    content?: string;
    imageUrl?: string | StaticImageData;
    imageAlt?: string;
    children?: React.ReactNode;
}

const compId = 'hero'

export const Hero = ({className, title, content, imageUrl, imageAlt, children}:HeroProps) => {

    return (
        <Container htmlTag='section' justifyContent='justify-center' width='full' className={`bg-[#64748b] relative overflow-hidden ${compId} ${className}`}>
            <Container layout='row' width='wide' alignItems='items-center' className={`h-[clamp(26rem, 80vw, 50rem)] mx-auto w-full ${compId}__wrapper`}>

                {imageUrl &&
                    <figure className={`absolute w-[100vw] h-full flex-1 z-0 top-0 left-1/2 -translate-x-1/2 ${compId}__image`}>
                        <Image
                            src={imageUrl}
                            alt={imageAlt || 'Image Alt'}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                            placeholder='blur'
                            className='object-fit'
                        />
                    </figure>
                }

                <Container layout='col' className={`py-fluid-2xl px-fluid-md z-10 w-full mq-1200:w-1/2 relative text-center lg:text-left ${compId}__content`}>
                    {children ? children :
                    <>
                        <h1>
                            <span dangerouslySetInnerHTML={{ __html: title ?? '' }} />
                        </h1>
                        <p dangerouslySetInnerHTML={{__html: content ?? ''}} />
                    </>
                    }
                </Container>

            </Container>
        </Container>
    )
}

