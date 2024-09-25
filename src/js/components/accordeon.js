export const useAccordeon = () => {
    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(element => {

        element.addEventListener('click', (event) => {

            // currentTarget - говорим с элементом, на который навесили обработчик событий
            const accordionList = event.currentTarget
            // ищем открытую вкладку
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            // target - говорим с элементом с указанным классом ниже (с элементом у которого родитель .accordion-list__control)
            const accordionControl = event.target.closest('.accordion-list__control')
            if (!accordionControl) return
            event.preventDefault()
            // выбираем родителя элемента .accordion-list__control
            const accordionItem = accordionControl.parentElement
            // выбираем след элемент после .accordion-list__control (контент)
            const accordionContent = accordionControl.nextElementSibling

            // если уже есть открытая вкладка, то она закрывается при открытии новой
            // и если уже открытая вкладка не является той которую хотят открыть
            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                // узнаем правдивую высоту и увеличиваем на нее элемент (max-height: 0 то есть сначала высота равна 0)
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })
}