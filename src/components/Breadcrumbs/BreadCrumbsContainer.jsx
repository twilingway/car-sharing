import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastStepSelect, getStepSelect, setStep } from '../../store/order';
import BreadCrumbs from './BreadCrumbs';

const CRUMBS = [
  {
    id: 1,
    name: 'Местоположение',
  },
  {
    id: 2,
    name: 'Модель',
  },
  {
    id: 3,
    name: 'Дополнительно',
  },
  {
    id: 4,
    name: 'Итого',
  },
];

function BreadCrumbsContainer() {
  const lastStepValidate = useSelector(getLastStepSelect);
  const step = useSelector(getStepSelect);
  const dispatch = useDispatch();

  const handleSetStepClick = (id) => {
    dispatch(setStep(id));
    console.log('id :>> ', id);
  };

  return (
    <BreadCrumbs
      crumbs={CRUMBS}
      lastStep={lastStepValidate}
      step={step}
      onStepClick={handleSetStepClick}
    />
  );
}

export default BreadCrumbsContainer;
