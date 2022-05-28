import { createHTMLelement } from "./index.js";

function homePage() {
    const content = document.getElementById('content');

    const homepage = createHTMLelement('div', 'homepage', null, '');

    const name = createHTMLelement('h1', null, null, 'Chez Ti-Ed');
    const slogan = createHTMLelement('p', null, null, "Ooooh oui, c'est booooon!")

    homepage.appendChild(name);
    homepage.appendChild(slogan);

    content.appendChild(homepage);
};

export {homePage};

