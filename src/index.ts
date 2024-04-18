import { 
    // TELEPARTY_CHAT_WRAPPER_SELECTOR,
    // TELEPARTY_PLAYER_CONTAINER_ADAPTER_CLASS,
    // HULU_PLAYER_CONTAINER_SELECTOR,
    // PLUS_DYNAMIC_ORIENTATION_ADAPTER_CLASS,
    PLUS_DYNAMIC_ORIENTATION_ADAPTER_STYLES,
} from './constants';
// import { asyncQuerySelector } from './utils';

console.log('[Plus] Dynamic orientation adapter injected on Hulu.');

// Inject root styles
const styleElement = document.createElement('style');

styleElement.textContent = PLUS_DYNAMIC_ORIENTATION_ADAPTER_STYLES;

document.head.appendChild(styleElement);

// TODO: A simple media query style injection is sufficient for now...

// TODO: This function may become useful for more closely controlling styles in the future
// const main = async (): Promise<void> => {
//     // TODO: asyncQuerySelector will stop script execution until the target element is found.
//     // This is fine for now, but may need to be refactored in the future to allow for parallel execution.

//     // Apply chat wrapper styles
//     const chatWrapper = await asyncQuerySelector(TELEPARTY_CHAT_WRAPPER_SELECTOR) as Element;
    
//     if (!chatWrapper) {
//         // TODO: Can likely just throw errors and execute script on main level
//         console.error(`[Plus] Teleparty-injected node selected by \`${TELEPARTY_CHAT_WRAPPER_SELECTOR}\` not found.`);
//         return;
//     }

//     chatWrapper.classList.add(PLUS_DYNAMIC_ORIENTATION_ADAPTER_CLASS);

//     // Apply player container styles
//     const playerContainer = await asyncQuerySelector(`${HULU_PLAYER_CONTAINER_SELECTOR}.${TELEPARTY_PLAYER_CONTAINER_ADAPTER_CLASS}`) as Element;

//     if (!playerContainer) {
//         console.error('[Plus] Player container node not found.');
//         return;
//     }

//     playerContainer.classList.add(PLUS_DYNAMIC_ORIENTATION_ADAPTER_CLASS);

//     const tpChatFrame = await asyncQuerySelector('iframe#tpChatFrame') as HTMLIFrameElement;
//     const tpChatFrameDocument = tpChatFrame.contentDocument;
    
//     if (!tpChatFrameDocument) {
//         console.error('[Plus] Teleparty chat frame document not found.');
//         return;
//     }

//     // Rotate "Close Chat" button
//     // FIXME: tpChatFrameDocument is about:blank (CORS issue?)
//     console.log('[Plus] Attempting to rotate "Close Chat" button...');
//     const closeChatButton = await asyncQuerySelector('img[tp-id="close_chat"]', tpChatFrameDocument) as HTMLElement;

//     if (!closeChatButton) {
//         console.error('[Plus] Close chat button not found.');
//         return;
//     }

//     closeChatButton.style.transform = 'rotate(90deg)';
// };

// main();
