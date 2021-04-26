import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Points from './Points';

import useStepValidator from '../../hooks/useStepValidator';
import {
  selectOrderCity,
  selectOrderPoint,
} from '../../store/selectors/orderSelectors';
import { setOrderCity, setOrderPoint } from '../../store/reducers/orderReducer';
import { selectPoint } from '../../store/selectors/pointSelectors';
import { fetchCity, fetchPointById } from '../../store/thunks/pointThunks';

function PointContainer() {
  const orderCity = useSelector(selectOrderCity);
  const orderPoint = useSelector(selectOrderPoint);

  const pointRedux = useSelector(selectPoint);

  const { checkLastStepValidate } = useStepValidator();

  const dispatch = useDispatch();

  const handleSelectCity = (city) => {
    if (city?.value) {
      dispatch(setOrderCity(city));
      dispatch(fetchPointById(city.value));
    } else {
      dispatch(setOrderCity({ value: null, label: null }));
    }
  };

  const handleSelectPoint = (point) => {
    if (point?.value) {
      dispatch(setOrderPoint(point));
    } else {
      dispatch(setOrderPoint({ value: null, label: null, name: null }));
    }
  };
  const handlePointClick = (point) => {
    dispatch(
      setOrderCity({ value: point.cityId.id, label: point.cityId.name })
    );
    dispatch(
      setOrderPoint({ value: point.id, name: point.name, label: point.address })
    );
  };

  useEffect(() => {
    checkLastStepValidate();
  }, [orderCity, orderPoint]);

  useEffect(async () => {
    dispatch(fetchCity());
  }, []);

  return (
    <Points
      pointRedux={pointRedux}
      orderCity={orderCity}
      orderPoint={orderPoint}
      onSelectCity={handleSelectCity}
      onSelectPoint={handleSelectPoint}
      onPointClick={handlePointClick}
    />
  );
}

export default PointContainer;
