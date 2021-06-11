
import menuItemTpl from './templates/menu-items.hbs';
import menu from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
    NAME: 'theme',
};

const render = () => {
    refs.menu.insertAdjacentHTML('beforeend', menuItemTpl(menu));
};

const refs = {
    menu: document.querySelector('.js-menu'),
    input: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
};
const themeShifter = (themeArg) => {
    if (themeArg === Theme.DARK) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT)
        if (!refs.input.checked) {
            refs.input.checked = true;
        }
        localStorage.setItem(Theme.NAME, Theme.DARK)
    };
    if (themeArg === Theme.LIGHT) {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK)
        localStorage.setItem(Theme.NAME, Theme.LIGHT)
    }
};
const eventHandler = (evt) => {
    if (evt.target.checked) {
        themeShifter(Theme.DARK);
    } else {
        themeShifter(Theme.LIGHT);
    }
};
if (localStorage.getItem(Theme.NAME) === Theme.DARK) {
    themeShifter(Theme.DARK);
} else { themeShifter(Theme.LIGHT); }
refs.input.addEventListener('change', eventHandler);
render();



