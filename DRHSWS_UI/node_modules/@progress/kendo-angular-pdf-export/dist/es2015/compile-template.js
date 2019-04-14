/**
 * @hidden
 */
export const compileTemplate = (templateRef) => {
    const context = {};
    let embeddedView = templateRef.createEmbeddedView(context);
    const result = (data) => {
        Object.assign(context, data);
        embeddedView.detectChanges();
        const templateWrap = document.createElement('span');
        embeddedView.rootNodes.forEach((rootNode) => {
            templateWrap.appendChild(rootNode.cloneNode(true));
        });
        return templateWrap;
    };
    result.destroy = () => {
        embeddedView.destroy();
        embeddedView = null;
    };
    return result;
};
