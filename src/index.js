import { load as loadHome } from './home.js';
import { load as loadMenu } from './menu.js';

const content = document.querySelector('#content');
const navBar = document.createElement('div');
const navLogo = document.createElement('h1');
const navLinks = document.createElement('div');
const homeLink = document.createElement('button');
const menuLink = document.createElement('button');
const contactLink = document.createElement('button');

navBar.classList.add('nav');
navLinks.classList.add('links')
navLogo.textContent = 'WARSAW STEAKHOUSE';
homeLink.textContent = 'HOME';
menuLink.textContent = 'MENU';
contactLink.textContent = 'CONTACT';

navLinks.appendChild(homeLink);
navLinks.appendChild(menuLink);
navLinks.appendChild(contactLink);

navBar.appendChild(navLogo);
navBar.appendChild(navLinks);

content.appendChild(navBar);

loadHome();

const wipeContent = () => {
    const tab = document.querySelector('.tab');
    if (tab) tab.remove();
}

homeLink.addEventListener('click', () => {
    wipeContent();
    loadHome();
})

menuLink.addEventListener('click', () => {
    wipeContent();
    loadMenu();
})

contactLink.addEventListener('click', () => {
    wipeContent();
})
