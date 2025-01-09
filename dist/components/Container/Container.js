"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const detectBarestyles_1 = require("../../utils/detectBarestyles");
const Container = ({ htmlTag: Tag = 'div', id = '', className = '', layout = 'col', alignItems, justifyContent, width = 'full', children, }) => {
    const isBarestyles = (0, detectBarestyles_1.isBarestylesInstalled)();
    // Conditionally include classes based on `barestyles`
    const layoutClasses = layout === 'col' ? 'flex flex-col' : 'flex flex-row';
    let barestylesWidthClass = '';
    if (isBarestyles) {
        switch (width) {
            case 'full':
                barestylesWidthClass = 'max-w-full';
                break;
            case 'wide':
                barestylesWidthClass = 'max-w-wide';
                break;
            case 'narrow':
                barestylesWidthClass = 'max-w-narrow';
                break;
            default:
                barestylesWidthClass = '';
        }
    }
    const containerClasses = [
        id,
        barestylesWidthClass, // Only apply if `barestyles` is available
        layoutClasses,
        className,
        alignItems,
        justifyContent,
    ]
        .filter(Boolean)
        .join(' ');
    return react_1.default.createElement(Tag, { id: id, className: containerClasses }, children);
};
exports.Container = Container;
