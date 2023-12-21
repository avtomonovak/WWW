function init() {
    let map = new ymaps.map('map-test', {
        center: [59.915858, 30.309139],
        zoom: 20
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.controls.disable('scrollZoom');
}

ymaps.ready(init);