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
}, statDescriptor, statSource, statImage, classNames = {} }) => {
    var _a, _b, _c, _d, _e;
    const headingClasses = ((_a = classNames.contentClasses) === null || _a === void 0 ? void 0 : _a.heading) || {};
    return (react_1.default.createElement("article", { className: `flex-1 flex flex-col text-center py-fluid-xl px-fluid-xl bg-[#64748b] ${compId}${classNames.card ? ' ' + classNames.card : ''}` },
        statImage && (react_1.default.createElement("figure", { className: `relative ${compId}__image${((_b = classNames.figureClasses) === null || _b === void 0 ? void 0 : _b.root) ? ' ' + classNames.figureClasses.root : ''}` },
            react_1.default.createElement(image_1.default, Object.assign({ src: statImage.src, alt: statImage.alt, fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" }, (((_c = classNames.figureClasses) === null || _c === void 0 ? void 0 : _c.img) ? { className: classNames.figureClasses.img } : {}))))),
        react_1.default.createElement("div", { className: `${compId}__content${((_d = classNames.contentClasses) === null || _d === void 0 ? void 0 : _d.root) ? ' ' + classNames.contentClasses.root : ''}` },
            react_1.default.createElement("h2", { className: headingClasses.root ? ' ' + headingClasses.root : '' },
                statData.line1 && (react_1.default.createElement("span", { className: headingClasses.line1 }, statData.line1)),
                statData.line2 && (react_1.default.createElement("span", { className: `block text-[1.7em]${headingClasses.line2 ? ' ' + headingClasses.line2 : ''}` }, statData.line2))),
            statDescriptor && react_1.default.createElement("p", { className: `font-h2${((_e = classNames.contentClasses) === null || _e === void 0 ? void 0 : _e.descriptor) ? ' ' + classNames.contentClasses.descriptor : ''}` }, statDescriptor),
            statSource && react_1.default.createElement("small", Object.assign({}, (classNames.source ? { className: classNames.source } : {})), statSource))));
};
exports.StatCard = StatCard;
