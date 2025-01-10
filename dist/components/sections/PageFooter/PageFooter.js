"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFooter = void 0;
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const Container_1 = require("../../Container");
const Modal_1 = require("../../Modal");
const compId = 'page-footer';
const PageFooter = ({ name, phone, address, branding, helpContent, privacyContent, className = '' }) => {
    return (react_1.default.createElement(Container_1.Container, { htmlTag: 'footer', className: `bg-[#94a3b8] p-fluid-sm z-10 ${compId} ${className}` },
        react_1.default.createElement(Container_1.Container, { width: 'wide', alignItems: 'items-center', justifyContent: 'justify-between', className: `gap-4 mx-auto ${compId}__wrapper`, layout: 'row' },
            "   ",
            branding &&
                react_1.default.createElement(Container_1.Container, { layout: 'row', className: 'school-info flex gap-4 items-center basis-4/5' },
                    branding &&
                        react_1.default.createElement("figure", { className: `relative w-fluid-xl h-fluid-md ${compId}__logo` },
                            react_1.default.createElement(image_1.default, { src: branding === null || branding === void 0 ? void 0 : branding.logoFooter, alt: branding === null || branding === void 0 ? void 0 : branding.logoAlt, fill: true })),
                    address &&
                        react_1.default.createElement("div", { className: `flex w-full ${compId}__contact-info` },
                            react_1.default.createElement("address", null,
                                address.street,
                                ", ",
                                address.city,
                                ", ",
                                address.state,
                                " ",
                                address.zip,
                                "\u00A0\u00A0"),
                            phone &&
                                react_1.default.createElement("a", { href: `tel:${phone}` }, phone))),
            (helpContent || privacyContent) &&
                react_1.default.createElement(Container_1.Container, { className: `basis-1/5 text-sm max-md:items-center ${compId}__help-privacy` },
                    react_1.default.createElement("div", { className: 'flex gap-4 uppercase' },
                        helpContent &&
                            react_1.default.createElement(Modal_1.ModalButton, { content: helpContent }, "Help"),
                        privacyContent &&
                            react_1.default.createElement(Modal_1.ModalButton, { content: privacyContent }, "Privacy"))))));
};
exports.PageFooter = PageFooter;
