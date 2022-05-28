import { createHTMLelement } from './index.js';

function footer() {
    const content = document.getElementById('content');

    const footer = createHTMLelement('p', 'footer', null, 'Created with love by Ed')

    content.appendChild(footer);
}

export {footer};