
(function () {
    
    document.addEventListener('click', modalInit)
    
    function modalInit(e) {
        const target = e.target
        const giftIcon = target.closest('.about__img-button')
        const closeButton = target.closest('.modal_close-button')
        
        if (!giftIcon && !closeButton) return

        if (!document.body.classList.contains('body--opened-modal')) {
            document.body.classList.add('body--opened-modal')
        }  else document.body.classList.remove('body--opened-modal')
    }

})()

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


