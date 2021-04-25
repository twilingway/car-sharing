import React from 'react';
import style from './yandexMap.module.scss';

function YandexMap() {
  return (
    <>
      <div className={style.yandexMap}>
        <p>Выбрать на карте:</p>
        <div className={style.map}>
          <div className={style.map} id="map" />
        </div>
      </div>
    </>
  );
}

export default YandexMap;
