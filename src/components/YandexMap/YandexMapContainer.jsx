/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import YandexMap from './YandexMap';

function YandexMapContainer({ city, points, selectedPoint, onPointClick }) {
  const [myMap, setMyMap] = useState(null);
  const [isPoints, setIsPoints] = useState(false);
  const [cityCoords, setCityCoords] = useState([54.3008799, 48.37334346]);
  const [isCoords, setIsCoords] = useState(false);

  function getCityCoords() {
    window.ymaps.geocode(city, { result: 1 }).then((res) => {
      // Выбираем первый результат геокодирования.
      const firstGeoObject = res.geoObjects.get(0);
      const coords = firstGeoObject.geometry.getCoordinates();
      setCityCoords(coords);
      setIsCoords(true);
    });
  }

  function initMap() {
    // Создание карты.

    const map = new window.ymaps.Map('map', {
      center: cityCoords,
      zoom: 10,

      controls: [],
    });
    setMyMap(map);
  }

  function setCity() {
    window.ymaps.geocode(city, { result: 1 }).then((res) => {
      // Выбираем первый результат геокодирования.
      const firstGeoObject = res.geoObjects.get(0);
      // const coords = firstGeoObject.geometry.getCoordinates();
      // Область видимости геообъекта.
      const bounds = firstGeoObject.properties.get('boundedBy');

      // Масштабируем карту на область видимости геообъекта.
      myMap.setBounds(bounds, {
        // Проверяем наличие тайлов на данном масштабе.
        checkZoomRange: true,
      });
    });
  }

  function selectPont() {
    window.ymaps
      .geocode(`${city}, ${selectedPoint.address}`, { result: 1 })
      .then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        // // Координаты геообъекта.
        const bounds = firstGeoObject.properties.get('boundedBy');

        myMap.setBounds(bounds, {
          // Проверяем наличие тайлов на данном масштабе.
          checkZoomRange: true,
        });
      });
  }

  function setPoints() {
    points.forEach((point) => {
      window.ymaps
        .geocode(`${city}, ${point.address}`, { result: 1 })
        .then((res) => {
          // Выбираем первый результат геокодирования.
          const firstGeoObject = res.geoObjects.get(0);
          // // Координаты геообъекта.
          const coords = firstGeoObject.geometry.getCoordinates();

          const myPlacemark = new window.ymaps.Placemark(
            coords,
            {
              hintContent: `${city}, ${point.address}, ${point.name} `,
              balloonContent: `${city}, ${point.address}, ${point.name} `,
            },
            {
              preset: 'islands#circleIcon',
              iconColor: '#3caa3c',
            }
          );

          myMap.geoObjects.add(myPlacemark);

          myPlacemark.events.add('click', () => onPointClick(point));
        });
    });

    setIsPoints(true);
  }

  useEffect(() => {
    if (city) {
      getCityCoords();
    } else {
      window.ymaps.ready(initMap);
    }
  }, []);

  useEffect(() => {
    if (isCoords) {
      window.ymaps.ready(initMap);
    }
  }, [isCoords]);

  useEffect(() => {
    if (city) {
      setCity();
    }
  }, [city]);

  useEffect(() => {
    if (myMap) {
      if (points.length > 0) {
        setPoints();
      }
    }
  }, [myMap, points]);

  useEffect(() => {
    if (myMap) {
      if (isPoints && selectedPoint) {
        selectPont();
      }
    }
  }, [selectedPoint]);

  return <YandexMap />;
}

export default YandexMapContainer;
