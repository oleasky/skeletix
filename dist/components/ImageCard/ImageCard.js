"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCard = void 0;
const react_1 = __importDefault(require("react"));
const Container_1 = require("../Container");
const image_1 = __importDefault(require("next/image"));
const compId = 'image-card';
const ImageCard = ({ image, altText, title, content, children }) => {
    return (react_1.default.createElement(Container_1.Container, { htmlTag: "article", className: `md:flex-row bg-slate-100 rounded-md ${compId}`, layout: 'row' },
        image && (react_1.default.createElement("figure", { className: 'flex-0 relative md:w-3/5' },
            react_1.default.createElement(image_1.default, { src: typeof image === 'string' ? image : image.src, alt: altText, width: 800, height: 800 }))),
        react_1.default.createElement(Container_1.Container, { htmlTag: "div", className: `flex-1 py-fluid-xl px-fluid-lg ${compId}__content` },
            react_1.default.createElement("h3", null, title),
            react_1.default.createElement("p", null, content),
            children)));
};
exports.ImageCard = ImageCard;
