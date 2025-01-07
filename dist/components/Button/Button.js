"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = ({ label, onClick, className = '' }) => {
    return (react_1.default.createElement("button", { onClick: onClick, className: `px-4 py-2 text-white bg-blue-500 rounded ${className}` }, label));
};
exports.Button = Button;
