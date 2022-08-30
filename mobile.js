const divMenu = document.querySelector('.mobile')
const menu = document.querySelector('.menu');
const divFechar = document.querySelector('.fechar')
const imgClose = document.querySelector('.close');




menu.addEventListener('click', () => {
    divMenu.classList.add('visible__menu')
    divFechar.classList.remove('visible__close')
    document.querySelector('.photos__back').classList.add('down')
})

imgClose.addEventListener('click', () => {
    divMenu.classList.remove('visible__menu')
    divFechar.classList.add('visible__close')
    document.querySelector('.photos__back').classList.remove('down')
})



