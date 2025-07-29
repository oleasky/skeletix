"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatCard = void 0;
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const compId = 'statistic-card';
const StatCard = ({ statData = {
    line1: '',
    line2: ''
}, statDescriptor, statSource, statImage, cardClassName = '', figureClasses = {}, contentClasses = {}, sourceClassName = '' }) => {
    const headingClasses = contentClasses.heading || {};
    return (react_1.default.createElement("article", { className: `flex-1 flex flex-col text-center py-fluid-xl px-fluid-xl bg-[#64748b] ${compId}${cardClassName ? ' ' + cardClassName : ''}` },
        statImage && (react_1.default.createElement("figure", { className: `relative ${compId}__image${figureClasses.root ? ' ' + figureClasses.root : ''}` },
            react_1.default.createElement(image_1.default, Object.assign({ src: statImage.src, alt: statImage.alt, fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" }, (figureClasses.img ? { className: figureClasses.img } : {}))))),
        react_1.default.createElement("div", { className: `${compId}__content${contentClasses.root ? ' ' + contentClasses.root : ''}` },
            react_1.default.createElement("h2", { className: `text-fluid-xl${headingClasses.root ? ' ' + headingClasses.root : ''}` },
                statData.line1 && (react_1.default.createElement("span", { className: headingClasses.line1 }, statData.line1)),
                statData.line2 && (react_1.default.createElement("span", { className: `block text-[1.7em]${headingClasses.line2 ? ' ' + headingClasses.line2 : ''}` }, statData.line2))),
            statDescriptor && react_1.default.createElement("p", { className: `font-h2${contentClasses.descriptor ? ' ' + contentClasses.descriptor : ''}` }, statDescriptor),
            statSource && react_1.default.createElement("small", Object.assign({}, (sourceClassName ? { className: sourceClassName } : {})), statSource))));
};
exports.StatCard = StatCard;
