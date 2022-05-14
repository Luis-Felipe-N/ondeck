btnMenu = document.querySelector('.header__btn-menu')
menuContainer = document.querySelector('[data-menu]')

btnMenu.addEventListener('click', (event) => {
    menuContainer.classList.toggle('active')
})