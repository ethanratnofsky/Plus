import { DIM_PINTEREST_STYLES } from './styles';

console.log('[Plus] DIM Pinterest injected.');

// Inject the styles into the head of the document
const styleElement = document.createElement('style');

styleElement.id = 'plus-dim-pinterest';

styleElement.textContent = DIM_PINTEREST_STYLES;

document.head.appendChild(styleElement);
