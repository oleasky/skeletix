import React from 'react';
import Image from 'next/image';
const compId = 'statistic-card';
export const StatCard = ({ statData = {
    line1: '',
    line2: ''
}, statDescriptor, statSource, statImage, classNames = {} }) => {
    const headingClasses = classNames.contentClasses?.heading || {};
    return (React.createElement("article", { className: `flex-1 flex flex-col text-center py-fluid-xl px-fluid-xl bg-[#64748b] ${compId}${classNames.card ? ' ' + classNames.card : ''}` },
        statImage && (React.createElement("figure", { className: `relative ${compId}__image${classNames.figureClasses?.root ? ' ' + classNames.figureClasses.root : ''}` },
            React.createElement(Image, { src: statImage.src, alt: statImage.alt, fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", ...(classNames.figureClasses?.img ? { className: classNames.figureClasses.img } : {}) }))),
        React.createElement("div", { className: `${compId}__content${classNames.contentClasses?.root ? ' ' + classNames.contentClasses.root : ''}` },
            React.createElement("h2", { className: headingClasses.root ? ' ' + headingClasses.root : '' },
                statData.line1 && (React.createElement("span", { className: headingClasses.line1 }, statData.line1)),
                statData.line2 && (React.createElement("span", { className: `block text-[1.7em]${headingClasses.line2 ? ' ' + headingClasses.line2 : ''}` }, statData.line2))),
            statDescriptor && React.createElement("p", { className: `font-h2${classNames.contentClasses?.descriptor ? ' ' + classNames.contentClasses.descriptor : ''}` }, statDescriptor),
            statSource && React.createElement("small", { ...(classNames.source ? { className: classNames.source } : {}) }, statSource))));
};
