import {createHTMLelement} from './index.js';

function header() {
    const content = document.getElementById('content');

    const header = createHTMLelement('div', 'header', null, '');
    const homebutton = createHTMLelement('button', null, null, 'Home');
    const menubutton = createHTMLelement('button', null, null, 'Menu');
    const contactbutton = createHTMLelement('button', null, null, 'Contact');
    
    header.appendChild(homebutton);
    header.appendChild(menubutton);
    header.appendChild(contactbutton);
    content.appendChild(header);
}

export {header};