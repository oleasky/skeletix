"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const compId = 'btn';
const Button = (props) => {
    const { type, children, className = '' } = props;
    if (type === 'link') {
        const { href, newTab } = props; // Extract specific props for link
        return (react_1.default.createElement("a", { href: href, target: newTab ? '_blank' : undefined, rel: newTab ? 'noopener noreferrer' : undefined, className: `p-4 text-[#FFFFFF] bg-[#64748b] rounded hover:bg-[#0f172a] ${compId} ${className}` },
            react_1.default.createElement("span", { className: `${compId}__text` }, children)));
    }
    return (react_1.default.createElement("button", { onClick: props.onClick, className: `px-4 py-2 text-[#FFFFFF] bg-[#64748b] rounded hover:bg-[#0f172a] ${compId} ${className}` },
        react_1.default.createElement("span", { className: `${compId}__text` }, children)));
};
exports.Button = Button;
