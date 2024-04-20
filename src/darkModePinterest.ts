console.log('[Plus] Dark mode Pinterest injected.');

const DARK_MODE_PINTEREST_STYLES = `
    body {
        background-color: #1a1a1a !important;
        color: #ffffff !important;
        --color-background-box-default: #1a1a1a;
        --color-background-box-secondary: #1e1e1e;
        --color-text-default: #ffffff;
        --color-icon-default: #ffffff;
        --color-background-button-white-default: #000000;
        --color-background-button-white-hover: #0f0f0f;
        --color-background-button-white-active: #1f1f1f;
        --color-background-button-secondary-default: #151515;
        --color-background-button-secondary-hover: #1d1d1d;
        --color-background-button-secondary-active: #292929;
        --color-background-tabs-default-base: #000000;
        --color-background-tabs-default-hover: #1a1a1a;
        --color-background-tabs-default-active: #1d1d1d;
        --color-background-popover-primary: #000000;
        --color-border-popover-primary: #000000;
        --color-background-box-light: #1a1a1a;
    }

    #searchBoxContainer > div {
        background-color: #111111 !important;
    }

    #SuggestionsMenu [data-test-id="typeaheadResults"] > div {
        background-color: #111111 !important;
    }

    [data-test-id="shop-button"] {
        backgound-color: rbga(0, 0, 0, 0.9) !important;
    }

    [data-test-id="one-bar-pill"] {
        background-color: rgb(16, 16, 16) !important;
    }
`;

const styleElement = document.createElement('style');

styleElement.textContent = DARK_MODE_PINTEREST_STYLES;

styleElement.id = 'plus-dark-mode-pinterest';

document.head.appendChild(styleElement);
