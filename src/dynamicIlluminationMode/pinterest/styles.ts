import { COLORS } from '../constants';

export const DIM_PINTEREST_STYLES: string = `
    @media (prefers-color-scheme: dark) {
        body {
            background-color: ${COLORS.dark.background.primary} !important;
            color: ${COLORS.dark.text.primary} !important;
            --color-background-box-default: ${COLORS.dark.background.primary};
            --color-background-box-secondary: ${COLORS.dark.background.darker};
            --color-background-box-selected: ${COLORS.dark.background.lighter};
            --color-text-default: ${COLORS.dark.text.primary};
            --color-icon-default: ${COLORS.dark.icon.primary};
            --color-background-button-white-default: ${COLORS.dark.background.lighter};
            --color-background-button-white-hover: ${COLORS.dark.button.hover};
            --color-background-button-white-active: ${COLORS.dark.button.focus};
            --color-background-button-secondary-default: ${COLORS.dark.background.lighter};
            --color-background-button-secondary-hover: ${COLORS.dark.button.hover};
            --color-background-button-secondary-active: ${COLORS.dark.button.focus};
            --color-background-tabs-default-base: ${COLORS.dark.background.primary};
            --color-background-tabs-default-hover: ${COLORS.dark.button.hover};
            --color-background-tabs-default-active: ${COLORS.dark.button.focus};
            --color-background-popover-primary: ${COLORS.dark.background.lighter};
            --color-border-popover-primary: ${COLORS.dark.background.lighter};
            --color-background-box-dark: ${COLORS.dark.background.lighter};
            --color-background-box-light: ${COLORS.dark.background.primary};
            --color-background-formfield-primary: ${COLORS.dark.background.primary};
            --color-text-formfield-default: ${COLORS.dark.text.primary};
            --color-background-overlay: ${COLORS.dark.background.primary};
        }

        input {
            color: ${COLORS.dark.text.primary} !important;
        }

        #searchBoxContainer > div {
            background-color: ${COLORS.dark.background.lighter} !important;
        }

        #SuggestionsMenu [data-test-id="typeaheadResults"] > div {
            background-color: ${COLORS.dark.background.primary} !important;
        }

        [data-test-id="shop-button"] {
            backgound-color: ${COLORS.dark.background.darker} !important;
        }

        [data-test-id="one-bar-pill"] {
            background-color: ${COLORS.dark.background.darker} !important;
        }

        [data-test-id="pinrep-source-link"] {
            background-color: ${COLORS.dark.background.darker} !important;
        }
    }
`;
