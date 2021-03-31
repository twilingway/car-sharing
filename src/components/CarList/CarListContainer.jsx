import React from 'react';
import CarList from './CarList';

import Elantra from '../../images/elantra.png';
import Hyndai from '../../images/hundai.png';
import Creta from '../../images/creta.png';
import Sonata from '../../images/sonata.png';

const CARS = [
  {
    id: 0,
    name: 'ELANTRA',
    price: '12 000 - 25 000 ₽',
    img: Elantra,
  },
  {
    id: 1,
    name: 'i30 N',
    price: '10 000 - 32 000 ₽',
    img: Hyndai,
  },
  {
    id: 2,
    name: 'CRETA',
    price: '12 000 - 25 000 ₽',
    img: Creta,
  },
  {
    id: 3,
    name: 'SONATA',
    price: '10 000 - 32 000 ₽',
    img: Sonata,
  },
  {
    id: 4,
    name: 'ELANTRA',
    price: '12 000 - 25 000 ₽',
    img: Elantra,
  },
  {
    id: 5,
    name: 'i30 N',
    price: '10 000 - 32 000 ₽',
    img: Hyndai,
  },
  {
    id: 6,
    name: 'CRETA',
    price: '12 000 - 25 000 ₽',
    img: Creta,
  },
  {
    id: 7,
    name: 'SONATA',
    price: '10 000 - 32 000 ₽',
    img: Sonata,
  },
  {
    id: 8,
    name: 'ELANTRA',
    price: '12 000 - 25 000 ₽',
    img: Elantra,
  },
  {
    id: 9,
    name: 'i30 N',
    price: '10 000 - 32 000 ₽',
    img: Hyndai,
  },
  {
    id: 10,
    name: 'CRETA',
    price: '12 000 - 25 000 ₽',
    img: Creta,
  },
  {
    id: 10,
    name: 'SONATA',
    price: '10 000 - 32 000 ₽',
    img: Sonata,
  },
];

function CarListContainer() {
  return <CarList cars={CARS} />;
}

export default CarListContainer;
