export const useTabs = () => {

const tabs = document.querySelector('.hero__tabs')

    tabs.addEventListener('click', toggleTab)

    function toggleTab(event) {

        const tab = event.target.closest('.hero__tabs-link')

        if (!tab) return
        event.preventDefault()
        if (tab.classList.contains('hero__tabs-link--active')) return

        const tabContentID = tab.getAttribute('href')
        // вкладка на которую хотим переключиться
        const tabContent = document.querySelector(tabContentID)
        // активная до этого кнопка таба
        const activeControl = document.querySelector('.hero__tabs-link--active')
        // активная до этого вкладка
        const activeContent = document.querySelector('.hero__tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('hero__tabs-link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('hero__tab-content--show')
        }

        tab.classList.add('hero__tabs-link--active')
        tabContent.classList.add('hero__tab-content--show')
    }
}