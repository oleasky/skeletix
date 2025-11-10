import React from 'react';
const compId = 'btn';
export const Button = (props) => {
    const { type, children, className = '' } = props;
    if (type === 'link') {
        const { href, newTab } = props; // Extract specific props for link
        return (React.createElement("a", { href: href, target: newTab ? '_blank' : undefined, rel: newTab ? 'noopener noreferrer' : undefined, className: `p-4 text-[#FFFFFF] bg-[#64748b] rounded hover:bg-[#0f172a] ${compId} ${className}` },
            React.createElement("span", { className: `${compId}__text` }, children)));
    }
    return (React.createElement("button", { onClick: props.onClick, className: `px-4 py-2 text-[#FFFFFF] bg-[#64748b] rounded hover:bg-[#0f172a] ${compId} ${className}` },
        React.createElement("span", { className: `${compId}__text` }, children)));
};
