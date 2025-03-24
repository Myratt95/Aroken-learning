const btn = document.querySelector('.btn-open')
const btnClose = document.querySelector('.modal__close-btn')
const modal = document.querySelector('.modal')
const modalWind = document.querySelector('.modal__window')
const body = document.body



btn.addEventListener('click', () => {
    modal.style.zIndex = "2"
    modalWind.style.opacity = "1"
    modalWind.style.visibility = "visible"
    body.style.overflowY = 'hidden'
})

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal'))  {
                modal.style.zIndex = '-1'
                modalWind.style.opacity = "0"
                modalWind.style.visibility = "hidden"
                body.style.overflowY = 'visible'
        }
    }) 

btnClose.addEventListener ('click', () =>{
    modal.style.zIndex = '-1'
    modalWind.style.visibility = "hidden"
    modalWind.style.opacity = "0"
    body.style.overflowY = 'visible'
})

document.addEventListener('keydown', event => {
    if (event.code === "Escape" && modal.style.zIndex === "2") {
        modal.style.zIndex = '-1'
        modalWind.style.visibility = "hidden"
        modalWind.style.opacity = "0"
        body.style.overflowY = 'visible'
    }
})