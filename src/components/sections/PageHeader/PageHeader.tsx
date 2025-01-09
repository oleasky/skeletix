import Image from 'next/image'
import React from 'react'
import { Container } from '../../Container'

interface HeaderProps {
    className?: string;
    logoUrl?: string;
    logoAlt?: string;
    children?: React.ReactNode;
    logoWidth?: string;
    logoHeight?: string;
}

const compId = 'page-header'

export const PageHeader = ({ className, logoUrl, logoAlt, children, logoHeight, logoWidth } : HeaderProps) => {
    
    let logoWidthSize = 'w-fluid-3xl'
    let logoHeightSize = 'h-fluid-lg'

    if (logoWidth) {
        logoWidthSize = `${logoWidth}`
    }

    if (logoHeight) {
        logoHeightSize = `${logoHeight}`
    }

    const logoClasses = [
        'block',
        'relative',
        logoHeightSize,
        logoWidthSize,
        `${compId}__logo`,
    ] 
    .filter(Boolean)
    .join(' ');

    return (
        <Container htmlTag='header' layout='row' alignItems='items-center' className={`flex p-fluid-sm bg-[#cbd5e1] ${compId} ${className}`}>
            <Container width='wide' className='mx-auto w-full'>
                { logoUrl && 
                    <figure className={logoClasses}>
                        <Image
                            src={logoUrl}
                            alt={logoAlt || 'Logo Header'}
                            fill
                            priority
                        />
                    </figure>
                }
                {children && <Container className='flex items-center justify-between'>{children}</Container>}
            </Container>
        </Container>
    )
}
