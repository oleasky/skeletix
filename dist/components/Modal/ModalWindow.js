"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalWindow = void 0;
const react_1 = __importDefault(require("react"));
const Container_1 = require("../Container");
const compId = 'modal';
const ModalWindow = ({ className = '', children }) => {
    return (react_1.default.createElement(Container_1.Container, { id: "modal", className: `bg-red-500 ${compId}__window ${className}` }, children));
};
exports.ModalWindow = ModalWindow;
