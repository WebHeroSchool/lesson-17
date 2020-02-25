(function () {
    const menu__icon = document.querySelector('.menu__icon');
    menu__icon.addEventListener('click', () => {
        menu__icon.classList.toggle('menu_active');
    });
}());