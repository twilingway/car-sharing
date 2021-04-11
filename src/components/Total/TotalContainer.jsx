import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSelect, setOrderLatStepValidate } from '../../store/order';
import Total from './Total';

import style from './total-container.module.scss';

function TotalContainer() {
  const orderRedux = useSelector(getOrderSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOrderLatStepValidate(4));
  }, []);

  return (
    <div className={style.wrapper}>
      <Total order={orderRedux} />
    </div>
  );
}

export default TotalContainer;
