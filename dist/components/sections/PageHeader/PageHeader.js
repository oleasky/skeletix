"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = void 0;
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const Container_1 = require("../../Container");
const PageHeader = ({ className, logoUrl, logoAlt, children }) => {
    return (react_1.default.createElement(Container_1.Container, { htmlTag: 'header', layout: 'row', alignItems: 'items-center', className: `page-header flex p-fluid-sm bg-[#cbd5e1] ${className}` },
        react_1.default.createElement(Container_1.Container, { width: 'wide', alignItems: 'items-center', className: 'mx-auto w-full' },
            logoUrl &&
                react_1.default.createElement("figure", { className: 'logo w-fluid-3xl block h-fluid-lg relative' },
                    react_1.default.createElement(image_1.default, { src: logoUrl, alt: logoAlt || 'Logo Header', fill: true, priority: true })),
            children && react_1.default.createElement(Container_1.Container, { className: 'flex items-center justify-between' }, children))));
};
exports.PageHeader = PageHeader;
