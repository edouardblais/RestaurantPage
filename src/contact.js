import { createHTMLelement } from "./index.js";

function contact() {
    const content = document.getElementById('content');

    const contact = createHTMLelement('div', 'contact', null, '');

    const adresse = createHTMLelement('p', null, null, '1234 rue du Bon Gars');
    const codepostal = createHTMLelement('p', null, null, 'H1H 1H1');
    const tel = createHTMLelement('p', null, null, '(123) 456-7890');
    const mail = createHTMLelement('p', null, null, 'ti-ed@coolmail.com');

    contact.appendChild(adresse);
    contact.appendChild(codepostal);
    contact.appendChild(tel);
    contact.appendChild(mail);
    content.appendChild(contact);
};

export {contact};