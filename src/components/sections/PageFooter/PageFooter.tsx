import React from 'react'
import Image from 'next/image'
import { Container} from '../../Container'
import { ModalButton } from '../../Modal';

interface FooterProps {
    name?: string;
    phone?: string;
    address?: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    branding?: {
        logoFooter: string;
        logoAlt: string;
    };
    helpContent?: React.ReactNode;
    privacyContent?: React.ReactNode;
    className?: string;
}

const compId = 'page-footer';

export const PageFooter = ({
    name, 
    phone, 
    address,
    branding, 
    helpContent, 
    privacyContent,
    className = ''
}:FooterProps) => {
    return (
        <Container
            htmlTag='footer'
            className={`bg-[#94a3b8] p-fluid-sm z-10 ${compId} ${className}`}
        >
            <Container
                alignItems='items-center'
                justifyContent='justify-between'
                className='gap-4'
                layout='row'
            >   {branding &&
                    <Container layout='row' className='school-info flex gap-4 items-center basis-4/5'>
                        {branding &&
                            <figure className={`relative w-fluid-xl h-fluid-md ${compId}__logo`}>
                                <Image
                                    src={branding?.logoFooter}
                                    alt={branding?.logoAlt}
                                    fill
                                />
                            </figure>
                        }
                        {address &&
                            <div className={`flex w-full ${compId}__contact-info`}>
                                <address>{address.street}, {address.city}, {address.state} {address.zip}&nbsp;&nbsp;</address>
                                {phone &&
                                    <a href={`tel:${phone}`}>{phone}</a>
                                }
                            </div>
                        }
                    </Container>
                }
                {(helpContent || privacyContent) &&
                    <Container className={`basis-1/5 text-fluid-xs max-md:items-center ${compId}__help-privacy`}>
                        <div className='flex gap-4 uppercase'>
                            {helpContent &&
                                <ModalButton content={helpContent} >
                                    Help
                                </ModalButton>
                            }
                            {privacyContent &&
                                <ModalButton content={privacyContent} >
                                    Privacy
                                </ModalButton>
                            }
                        </div>
                    </Container>
                }
            </Container>
        </Container>
    )
}
