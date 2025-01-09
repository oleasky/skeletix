import Image from 'next/image'
import React from 'react'
import { Container } from '../../Container'

interface HeaderProps {
    className?: string;
    logoUrl?: string;
    logoAlt?: string;
    children?: React.ReactNode;
}

export const PageHeader: React.FC<HeaderProps> = ({ className = '', logoUrl, logoAlt, children }) => {
    return (
        <Container htmlTag='header' layout='row' alignItems='items-center' className={`page-header flex p-fluid-sm bg-[#cbd5e1] ${className}`}>
            <Container width='wide' className='mx-auto w-full'>
                { logoUrl && 
                    <figure className='logo w-fluid-3xl block h-fluid-lg relative'>
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
