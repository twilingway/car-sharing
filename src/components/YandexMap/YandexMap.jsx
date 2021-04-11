import React from 'react';
//  import yandexMap from '../../images/yandexMap.png';

import style from './yandexMap.module.scss';

function YandexMap() {
  return (
    <>
      <div className={style.yandexMap}>
        <p>Выбрать на карте:</p>
        <div className={style.map}>
          {/* <img src={yandexMap} alt="YandexMap" /> */}
          <div className={style.map} id="map" />
        </div>
      </div>
    </>
  );
}

export default YandexMap;
