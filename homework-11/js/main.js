const button = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const menuButtons = document.querySelectorAll('.nav__link')

button.addEventListener('click', () => {
    if (body.classList.contains('body--opened-menu')) {
        body.classList.remove('body--opened-menu')
    } else {
        body.classList.add('body--opened-menu')
    }
})

menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
        body.classList.remove('body--opened-menu')
    })
})



