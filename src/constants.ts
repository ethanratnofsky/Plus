// Teleparty
export const TELEPARTY_CHAT_WRAPPER_SELECTOR: string = '#chat-wrapper';
export const TELEPARTY_PLAYER_CONTAINER_ADAPTER_CLASS: string = 'with-chat';

// Hulu
export const HULU_PLAYER_CONTAINER_SELECTOR: string = '#dash-player-container';

// Plus Configurations
export const PLUS_DYNAMIC_ORIENTATION_ADAPTER_CLASS: string = 'plus-dynamic-orientation-adapter';
export const PORTRAIT_CHAT_HEIGHT_PROPORTION: number = 0.3;

// Style injections
export const PLUS_DYNAMIC_ORIENTATION_ADAPTER_STYLES: string = `
    @media (orientation: portrait) {
        ${HULU_PLAYER_CONTAINER_SELECTOR}.${TELEPARTY_PLAYER_CONTAINER_ADAPTER_CLASS} {
            left: unset !important;
            height: ${(1 - PORTRAIT_CHAT_HEIGHT_PROPORTION) * 100}% !important;
            width: 100% !important;
        }

        ${TELEPARTY_CHAT_WRAPPER_SELECTOR} {
            top: unset !important;
            height: ${PORTRAIT_CHAT_HEIGHT_PROPORTION * 100}% !important; 
            width: 100% !important;
        }
    }
`;
