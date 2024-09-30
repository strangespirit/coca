import ymaps3 from 'ymaps3';

async function useMap() {
    // ждем загрузку модуля
    await ymaps3.ready;
    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [-23.615343366872768,135.9556315351218],
                zoom: 3,
            }
        }
    );

    map.controls.remove('geolocationControl'); // удаление геолокации
    map.controls.remove('searchControl'); // удаление поиска
    map.controls.remove('trafficControl'); // удаление контроля трафика
    map.controls.remove('typeSelector'); // удаление типа
    map.controls.remove('fullscreenControl'); // удаление кнопки перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаление контрол зуммирования
    map.controls.remove('rulerControl'); // удаление контрол правил
    map.controls.remove('scrollZoom'); // отключаем скролл карты (опционально)

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}

useMap();