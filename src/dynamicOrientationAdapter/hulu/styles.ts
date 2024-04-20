import {
    PORTRAIT_CHAT_HEIGHT_PROPORTION,
    TELEPARTY_CHAT_WRAPPER_SELECTOR,
    TELEPARTY_PLAYER_CONTAINER_ADAPTER_CLASS,
} from '../constants';
import { HULU_PLAYER_CONTAINER_SELECTOR } from './constants';

export const DOA_HULU_STYLES = `
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
