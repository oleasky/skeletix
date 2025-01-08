import React from 'react'
import { Container } from '../Container'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface ImageCardProps{
    image?: string | StaticImageData,
    altText: string,
    title?: string,
    content?: string,
    children?: React.ReactNode
}

const compId = 'image-card'

export const ImageCard = ({image, altText, title, content, children}:ImageCardProps) => {
  return (
    <Container htmlTag="article" className={`md:flex-row bg-slate-100 rounded-md ${compId}`} layout='row'>
        {image && (
          <figure className='flex-0 relative md:w-3/5'>
            <Image
            src={typeof image === 'string' ? image : image.src}
            alt={altText}
            width={800}
            height={800}
            />
          </figure>
        )}
        <Container htmlTag="div" className={`flex-1 py-fluid-xl px-fluid-lg ${compId}__content`}>
            <h3>{title}</h3>
            <p>{content}</p>
            {children}
        </Container>
    </Container>
  )
}
