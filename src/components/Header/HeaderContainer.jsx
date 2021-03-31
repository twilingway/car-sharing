import React, { useState } from 'react';
import Header from './Header';

function HeaderContainer() {
  const [city, setCity] = useState('');

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  return <Header city={city} onChangeCity={handleChangeCity} />;
}

export default HeaderContainer;
