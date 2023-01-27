var mapdetected = document.querySelector('#map');
var mapdetected1 = document.querySelector('#map1');
if (mapdetected) {

    ymaps.ready(init);

var placemarks = [
    {
        latitude: 55.755814,
        longitude: 37.617635,
        hintContent: '<div class="map__hint">Москва, проект № 1</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 58.048454,
        longitude: 38.858406,
        hintContent: '<div class="map__hint">Рыбинск, проект № 2</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 59.122612,
        longitude: 37.903461,
        hintContent: '<div class="map__hint">Череповец, проект № 3</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 59.939095,
        longitude: 30.315868,
        hintContent: '<div class="map__hint">Санкт-Петербург, проект № 4</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 62.204750,
        longitude: 34.272758,
        hintContent: '<div class="map__hint">Кондопога, проект № 5</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 59.991786,
        longitude: 29.775846,
        hintContent: '<div class="map__hint">Крондштадт, проект № 6</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: -6.175391,
        longitude: 106.826252,
        hintContent: '<div class="map__hint">Джакарта, проект № 7</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 21.029187,
        longitude: 105.852362,
        hintContent: '<div class="map__hint">Вьетнам, проект № 8</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 50.329425,
        longitude: 142.706537,
        hintContent: '<div class="map__hint">Сахалин, проект № 9</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 69.197402,
        longitude: 33.437226,
        hintContent: '<div class="map__hint">Полярный, проект № 10</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 69.076455,
        longitude: 33.417679,
        hintContent: '<div class="map__hint">Североморск, проект № 11</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 54.710157, 
        longitude: 20.510137,
        hintContent: '<div class="map__hint">Калининград, проект № 12</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 68.970663, 
        longitude: 33.074909,
        hintContent: '<div class="map__hint">Мурманск, проект № 13</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 44.616495, 
        longitude: 33.525126,
        hintContent: '<div class="map__hint">Севастополь, проект № 14</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 43.585472, 
        longitude: 39.723089,
        hintContent: '<div class="map__hint">Сочи, проект № 15</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 42.983548, 
        longitude: 47.504035,
        hintContent: '<div class="map__hint">Махачкала, проект № 16</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 46.347614, 
        longitude: 48.030169,
        hintContent: '<div class="map__hint">Астрахань, проект № 17</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 47.106811, 
        longitude: 51.916874,
        hintContent: '<div class="map__hint">Атырау, проект № 18</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 43.635601, 
        longitude: 51.168254,
        hintContent: '<div class="map__hint">Актау, проект № 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    },
    {
        latitude: 43.115536, 
        longitude: 131.885485,
        hintContent: '<div class="map__hint">Владивосток, проект № 20</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__balloon--img" src="assets/images/intro_slaider/1-2.jpg" alt="Московский проект"/>',
            '<a class="map__balloon--link" href="#">Выполнили работы по судоремонту</a>',
            '</div>'
        ]
    }
],
    geoObjects= [];

    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [44.59030906, 99.16750316],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 3,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'assets/images/logo_mini.png',
                iconImageSize: [36, 36]
            });
        }

        var clusterer = new ymaps.Clusterer({
            clusterIcons: [
                {
                    href: 'assets/images/logo_mini.png',
                    size: [56, 56],
                    offset: [-50, -50]
                }
            ],
            clusterIconContentLayout: null
        });

        myMap.geoObjects.add(clusterer);
        clusterer.add(geoObjects);
    }
}
if (mapdetected1) {

    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map1", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [46.25616792, 47.99195396],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        var placemark = new ymaps.Placemark([46.255854, 47.990581], {
            hintContent: 'Многопрофильная компания КАСКАД',
            balloonContent: 'Астраханская область, Приволжский район, село Карагали, ул. Заводская, д.2.'
        });

        myMap.geoObjects.add(placemark);

    }
}
