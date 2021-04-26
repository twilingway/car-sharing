/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrder } from '../../store/selectors/orderSelectors';
import { setOrderLatStepValidate } from '../../store/reducers/orderReducer';
import Total from './Total';

function TotalContainer() {
  const orderRedux = useSelector(selectOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOrderLatStepValidate(4));
  }, []);

  return <Total order={orderRedux} />;
}

export default TotalContainer;
