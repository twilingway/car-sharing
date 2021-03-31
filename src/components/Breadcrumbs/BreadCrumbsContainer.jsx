import React from 'react';
import BreadCrumbs from './BreadCrumbs';

const CRUMBS = [
  {
    id: 0,
    name: 'Местоположение',
  },
  {
    id: 1,
    name: 'Модель',
  },
  {
    id: 2,
    name: 'Дополнительно',
  },
  {
    id: 3,
    name: 'Итого',
  },
];

function BreadCrumbsContainer() {
  return <BreadCrumbs crumbs={CRUMBS} />;
}

export default BreadCrumbsContainer;
