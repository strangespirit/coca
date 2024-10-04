import mapMarkerIcon from '/assets/icons/map-marker.svg';
export const useMap = () => {
    const themeTarget = document.querySelector('[data-theme]');
    const theme = localStorage.getItem('theme') || 'light';

    // получаем тему
    const themeTargetDataset = themeTarget.dataset;
    themeTargetDataset.theme = theme;

    async function initMap() {
        // ждем загрузки карты
        await ymaps3.ready;

        //  Основной объект карты, слой схемы карты, слой для добавления меток, объектов и др
        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

        // инициализация карты
        const map = new YMap(document.getElementById('map'), {
            location: {
                center: [110, 1],
                zoom: 2,
            },
        });

        // создаем слой для объектов
        const featuresLayer = new YMapDefaultFeaturesLayer();
        // добавлем его на карту
        map.addChild(featuresLayer);

        // создаем маркер
        function addCustomMarker() {
            // создаем контейнер для метки
            const content = document.createElement('section');
            const marker = new ymaps3.YMapMarker(
                {
                    coordinates: [130, -25],
                    // маркер не может перетаскиваться
                    draggable: false,
                },
                content,
            );
            // добавление маркера на карту
            map.addChild(marker);
            content.innerHTML = `<div class="hero__map-marker">
      <div class="hero__map-marker-info">
        <h4 class="hero__map-marker-title">Yogja, INA</h4>
      </div>
      <img class="hero__map-marker-icon" src="${mapMarkerIcon}" width="54" height="54" alt="marker in map" />
      </div>`;
        }

        // создание темной темы
        function layerDark() {
            const layerDark = new YMapDefaultSchemeLayer({
                customization: [
                    {
                        tags: {
                            all: ['water'],
                        },
                        stylers: [
                            {
                                color: '#1d1e25',
                            },
                        ],
                    },
                    {
                        elements: 'label',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        tags: {
                            all: ['landscape'],
                        },
                        stylers: [
                            {
                                color: '#acacb9',
                            },
                        ],
                    },
                ],
            });
            map.addChild(layerDark);
            window.layerDark = layerDark;
        }

        function layerLight() {
            const layerLight = new YMapDefaultSchemeLayer({
                customization: [
                    {
                        tags: {
                            all: ['water'],
                        },
                        stylers: [
                            {
                                color: '#FFF',
                            },
                        ],
                    },
                    {
                        elements: 'label',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        tags: {
                            all: ['landscape'],
                        },
                        stylers: [
                            {
                                color: '#acacb9',
                            },
                        ],
                    },
                ],
            });
            map.addChild(layerLight);
            window.layerLight = layerLight;
        }

        // удаление ранее добавленных слоев тем
        function removeLayers() {
            if (window.layerDark) {
                map.removeChild(window.layerDark);
                window.layerDark = null;
            }
            if (window.layerLight) {
                map.removeChild(window.layerLight);
                window.layerLight = null;
            }
        }

        // смена темы карты в зависимости от переданного аргумента newTheme
        function switchMapTheme(newTheme) {
            removeLayers();
            if (newTheme === 'dark') {
                layerDark();
            } else {
                layerLight();
            }
        }

        // проверка темы
        if (theme === 'dark') {
            layerDark();
        } else {
            layerLight();
        }

        // добавление маркера на карты
        addCustomMarker();

        // экспортируем ключевые объекты и функции для использования в других частях кода
        window.YMapDefaultSchemeLayer = YMapDefaultSchemeLayer;
        window.map = map;
        window.removeLayers = removeLayers;
        window.switchMapTheme = switchMapTheme;
    }

    initMap();
};