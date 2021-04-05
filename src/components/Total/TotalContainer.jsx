import React from 'react';
import { useSelector } from 'react-redux';
import { getOrderSelect } from '../../store/order';
import Total from './Total';

import style from './total-container.module.scss';

function TotalContainer() {
  const orderRedux = useSelector(getOrderSelect);

  return (
    <div className={style.wrapper}>
      <Total order={orderRedux} />
    </div>
  );
}

export default TotalContainer;
