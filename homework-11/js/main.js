
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

    // Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return

        e.preventDefault ()

        if (tabControl.classList.contains('tab-controls__link--active')) return

        e.preventDefault ()

        const tabContentID = tabControl.getAttribute('href')

        document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')
        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContentID).classList.add('tab-content--show')
        
    }

    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list')
    

    
    accordionLists.forEach(el =>  {

        el.addEventListener('click', (e) => {
        
        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
        
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;
        
        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened')
            accordionOpenedContent.style.maxHeight = null
        }

        accordionItem.classList.toggle('accordion-list__item--opened')

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null
        }

    });

    });


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


