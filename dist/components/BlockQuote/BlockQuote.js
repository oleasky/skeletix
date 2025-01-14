"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockQuote = void 0;
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const Container_1 = require("../Container");
const compId = 'blockquote';
const BlockQuote = ({ quote, author, authorTitle, image, imageAlt, gradYear, className }) => {
    return (react_1.default.createElement("blockquote", { className: `bg-[#f8fafc] relative w-full mx-auto  ${compId} ${className}` },
        image && (react_1.default.createElement("figure", { className: `relative w-[15rem] h-[18rem] mx-auto lg:w-full z-0 ${compId}__image` },
            react_1.default.createElement(image_1.default, { src: (image === null || image === void 0 ? void 0 : image.src) || '', alt: imageAlt || '', fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1000px) 80vw, (max-width: 1280px) 70vw", className: 'object-cover object-center' }))),
        react_1.default.createElement("div", { className: `z-10 top-0 left-0 w-full h-full ${compId}__content` },
            react_1.default.createElement("div", null,
                react_1.default.createElement("p", { dangerouslySetInnerHTML: { __html: quote } })),
            react_1.default.createElement(Container_1.Container, { layout: 'row', className: `gap-3 text-lg ${compId}__author` },
                react_1.default.createElement("span", null,
                    react_1.default.createElement("strong", null, author),
                    authorTitle && react_1.default.createElement("span", null,
                        ", ",
                        authorTitle),
                    gradYear && react_1.default.createElement("span", null,
                        ", ",
                        gradYear))))));
};
exports.BlockQuote = BlockQuote;
