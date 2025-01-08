import Image from 'next/image'
import React from 'react'
import { Container } from '../../Container'
// import data from "@/data/globalData.json";

// interface GlobalData {
//     partner: {
//         branding: {
//             logoHeader: string;
//             logoAlt: string;
//         };
//     };
// }

// const {
//     branding: {
//         logoHeader,
//         logoAlt
//     }
// } = (data as GlobalData).partner;


interface HeaderProps {
    classname?: string;
    logoUrl?: string;
    logoAlt?: string;
    children?: React.ReactNode;
}

export const PageHeader: React.FC<HeaderProps> = ({ classname, logoUrl, logoAlt, children }) => {
    return (
        <Container htmlTag='header' layout='row' alignItems='items-center' className={`page-header flex p-fluid-sm bg-slate-300 ${classname}`}>
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
