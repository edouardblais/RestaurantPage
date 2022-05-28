import { homePage } from './homepage.js';
import { header } from './header.js';
import { footer } from './footer.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

const content = document.getElementById('content');

function createHTMLelement(type, id, classes, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (classes) {
        classes.forEach((eachClass) => { element.classList.add(eachClass)
        });
    }
    if (content) element.innerText = content;

    return element;
}

function loadPage() {
    header();
    homePage();
    footer();
}

loadPage();

document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target === 'Home') {
        content.innerHTML = "";
        header();
        homePage();
        footer();
    } else if (target === 'Menu') {
        content.innerHTML = "";
        header();
        menu();
        footer();
    } else if (target === 'Contact') {
        content.innerHTML = "";
        header();
        contact();
        footer();
    };
});

export {createHTMLelement}

