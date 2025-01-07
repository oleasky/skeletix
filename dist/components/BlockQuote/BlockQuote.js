"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockQuote = void 0;
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const Container_1 = require("../Container");
const BlockQuote = ({ quote, author, authorTitle, image, imageAlt }) => {
    return (react_1.default.createElement("blockquote", { className: 'testimonial-card relative w-full mx-auto' },
        image && (react_1.default.createElement("figure", { className: 'relative w-[15rem] h-[18rem] mx-auto lg:w-full lg:h-full z-0' },
            react_1.default.createElement(image_1.default, { src: (image === null || image === void 0 ? void 0 : image.src) || '', alt: imageAlt || '', fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", className: 'object-cover object-center' }))),
        react_1.default.createElement("div", { className: 'lg:absolute z-10 top-0 left-0 w-full h-full' },
            react_1.default.createElement("div", { className: 'blockquote-content' },
                react_1.default.createElement("p", { dangerouslySetInnerHTML: { __html: quote } })),
            react_1.default.createElement(Container_1.Container, { layout: 'row', justifyContent: 'justify-center', alignItems: 'items-center', className: 'gap-3 author text-lg text-center lg:absolute' },
                react_1.default.createElement("span", null,
                    react_1.default.createElement("strong", null,
                        author,
                        ","),
                    authorTitle && react_1.default.createElement("span", null,
                        " ",
                        authorTitle))))));
};
exports.BlockQuote = BlockQuote;
