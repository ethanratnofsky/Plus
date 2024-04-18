/**
 * Asynchronously queries for an element using the specified selectors.
 * If the element is already available, it returns it immediately.
 * Otherwise, it observes the document for changes and resolves the promise
 * when the element becomes available.
 *
 * @param selectors - The CSS selectors to query for.
 * @param refDocument - The reference document to query within. Defaults to the current document.
 * @returns A promise that resolves to the queried element or null if not found.
 */
export const asyncQuerySelector = (selectors: string, refDocument: Document = document): Promise<Element | null> => (
    new Promise(resolve => {
        console.log('[Plus] Asynchronously querying for selectors...', selectors, refDocument);

        // If the target element is already available, return it immediately
        if (refDocument.querySelector(selectors)) {
            return resolve(refDocument.querySelector(selectors));
        }

        // Observe the root document element node and its descendants
        // for the addition of new child nodes or removal of existing child nodes
        const observer = new MutationObserver(() => {
            console.log('[Plus] Mutation observer callback triggered...', selectors, refDocument);

            const targetElement = refDocument.querySelector(selectors);

            // On each DOM change, check if the target element is now available
            if (targetElement) {
                console.log('[Plus] Target element found:', targetElement);
                observer.disconnect();
                resolve(targetElement);
            }
        });

        observer.observe(refDocument.documentElement, {
            childList: true,
            subtree: true
        });
    })
);
