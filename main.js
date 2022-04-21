
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


const NavBar = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if(scrollY > 20){
        NavBar.classList.add('sticky')
    } else {
        NavBar.classList.remove('sticky')
    }
})

const NavItem = document.querySelectorAll('.navlist a')

NavItem[0].addEventListener('click', () => {
    Nav.classList.remove('open')
    menuBar[0].classList.remove('open')
    menuBar[1].classList.remove('open')
    menuBar[2].classList.remove('open')
})
NavItem[1].addEventListener('click', () => {
    Nav.classList.remove('open')
    menuBar[0].classList.remove('open')
    menuBar[1].classList.remove('open')
    menuBar[2].classList.remove('open')
})
NavItem[2].addEventListener('click', () => {
    Nav.classList.remove('open')
    menuBar[0].classList.remove('open')
    menuBar[1].classList.remove('open')
    menuBar[2].classList.remove('open')
})
NavItem[3].addEventListener('click', () => {
    Nav.classList.remove('open')
    menuBar[0].classList.remove('open')
    menuBar[1].classList.remove('open')
    menuBar[2].classList.remove('open')
})


const Scroll = document.querySelector('.scroll-up')
window.addEventListener('scroll', () => {
    if(scrollY > 20){
        Scroll.classList.add('active')
    } else {
        Scroll.classList.remove('active')
    }
})

