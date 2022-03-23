
const OpenMenu = document.querySelector('.open-menu')
const menuBar = document.querySelectorAll('.open-menu span')
const Nav = document.querySelector('.navlist')

console.log(menuBar)

OpenMenu.addEventListener('click', () => {
    Nav.classList.toggle('open')
    menuBar[0].classList.toggle('open')
    menuBar[1].classList.toggle('open')
    menuBar[2].classList.toggle('open')
})

const darkbtn = document.querySelector('.dark-btn')
const dark = document.querySelector('.dark')
const sunbtn= document.querySelector('.light')

darkbtn.addEventListener('click', () => [
    document.body.classList.toggle('dark-theme'),
    dark.classList.toggle('on'),
    sunbtn.classList.toggle('on')

])
