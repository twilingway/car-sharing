import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSelect, setOrderLatStepValidate } from '../../store/order';
import Total from './Total';

function TotalContainer() {
  const orderRedux = useSelector(getOrderSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOrderLatStepValidate(4));
  }, []);

  return <Total order={orderRedux} />;
}

export default TotalContainer;
