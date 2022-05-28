import { createHTMLelement } from "./index.js";

function menu() {
    const content = document.getElementById('content');

    const menu = createHTMLelement('div', 'menu', null, '');

    const burger = createHTMLelement('h2', 'choice', null, 'Le Burger du Roi Ed');
    const burgerinfo = createHTMLelement('p', null, null, "Galette Vege de Ed, cornichon, spicy mayo de Ed, fromage cheesy, tomate, oignons cuits dans l'beurre");

    const poutine = createHTMLelement('h2', 'choice', null, 'La Poutine du Prince Ed');
    const poutineinfo = createHTMLelement('p', null, null, "Patates douces, gravy, fromage en crottes top quality");

    const patequeb = createHTMLelement('h2', 'choice', null, 'Le Pate Queb du Ti-Ed');
    const patequebinfo = createHTMLelement('p', null, null, "Steak, ble d'inde, patates");

    menu.appendChild(burger);
    burger.appendChild(burgerinfo);
    menu.appendChild(poutine);
    poutine.appendChild(poutineinfo);
    menu.appendChild(patequeb);
    patequeb.appendChild(patequebinfo);
    content.appendChild(menu);
};

export {menu};
