"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const Container_1 = require("../../components/Container");
const compId = 'hero';
const Hero = ({ className, title, content, imageUrl, imageAlt }) => {
    return (react_1.default.createElement(Container_1.Container, { htmlTag: 'section', justifyContent: 'justify-center', width: 'full', className: `bg-[#64748b] relative overflow-hidden ${compId} ${className}` },
        react_1.default.createElement(Container_1.Container, { layout: 'row', width: 'wide', alignItems: 'items-center', className: `h-[clamp(26rem, 80vw, 50rem)] mx-auto w-full ${compId}__wrapper` },
            imageUrl &&
                react_1.default.createElement("figure", { className: `absolute w-[100vw] h-full flex-1 z-0 top-0 left-1/2 -translate-x-1/2 ${compId}__image` },
                    react_1.default.createElement(image_1.default, { src: imageUrl, alt: imageAlt || 'Image Alt', fill: true, priority: true, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw", placeholder: 'blur', className: 'object-cover' })),
            react_1.default.createElement(Container_1.Container, { layout: 'col', className: `py-fluid-2xl px-fluid-md z-10 w-full mq-1200:w-1/2 relative text-center lg:text-left ${compId}__content` },
                react_1.default.createElement("h1", null,
                    react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: title !== null && title !== void 0 ? title : '' } })),
                react_1.default.createElement("p", { dangerouslySetInnerHTML: { __html: content !== null && content !== void 0 ? content : '' } })))));
};
exports.Hero = Hero;
