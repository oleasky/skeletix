import React from 'react';
import Image from 'next/image';
import { Container } from '../../Container';
import { ModalButton } from '../../Modal';
const compId = 'page-footer';
export const PageFooter = ({ name, phone, address, branding, helpContent, privacyContent, className = '' }) => {
    return (React.createElement(Container, { htmlTag: 'footer', className: `bg-[#94a3b8] p-fluid-sm z-10 ${compId} ${className}` },
        React.createElement(Container, { width: 'wide', alignItems: 'items-center', justifyContent: 'justify-between', className: `gap-4 mx-auto ${compId}__wrapper`, layout: 'row' },
            "   ",
            branding &&
                React.createElement(Container, { layout: 'row', className: 'school-info flex gap-4 items-center basis-4/5' },
                    branding &&
                        React.createElement("figure", { className: `relative w-fluid-xl h-fluid-md ${compId}__logo` },
                            React.createElement(Image, { src: branding?.logoFooter, alt: branding?.logoAlt, fill: true })),
                    address &&
                        React.createElement("div", { className: `flex w-full ${compId}__contact-info` },
                            React.createElement("address", null,
                                address.street,
                                ", ",
                                address.city,
                                ", ",
                                address.state,
                                " ",
                                address.zip,
                                "\u00A0\u00A0"),
                            phone &&
                                React.createElement("a", { href: `tel:${phone}` }, phone))),
            (helpContent || privacyContent) &&
                React.createElement(Container, { className: `basis-1/5 text-sm max-md:items-center ${compId}__help-privacy` },
                    React.createElement("div", { className: 'flex gap-4 uppercase' },
                        helpContent &&
                            React.createElement(ModalButton, { content: helpContent }, "Help"),
                        privacyContent &&
                            React.createElement(ModalButton, { content: privacyContent }, "Privacy"))))));
};
