import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOrder,
  selectOrderLastStep,
  selectOrderStep,
} from '../../store/selectors/orderSelectors';
import { setOrderStep } from '../../store/reducers/orderReducer';
import BreadCrumbs from './BreadCrumbs';
import CRUMBS from './crumbs.json';
import { setBasketStatus } from '../../store/reducers/basketReducer';

function BreadCrumbsContainer() {
  const history = useHistory();
  const orderRedux = useSelector(selectOrder);
  const lastStepValidate = useSelector(selectOrderLastStep);
  const step = useSelector(selectOrderStep);
  const dispatch = useDispatch();

  const handleSetStepClick = (id) => {
    dispatch(setOrderStep(id));
    dispatch(setBasketStatus(false));
    if (id === 6 && orderRedux.id) {
      history.push(`/order/${orderRedux.id}`);
    }
  };

  return (
    <BreadCrumbs
      crumbs={
        step === 6 ? [{ id: 6, name: `Заказ номер ${orderRedux.id}` }] : CRUMBS
      }
      lastStep={lastStepValidate}
      step={step}
      onStepClick={handleSetStepClick}
    />
  );
}

export default BreadCrumbsContainer;
