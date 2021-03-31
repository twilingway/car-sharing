/* eslint-disable no-unused-vars */
import React from 'react';
import { ReactComponent as X } from '../../assets/x.svg';
import cityIcon from '../../assets/city.svg';
import AutocompleteContainer from '../Autocomplete';
import style from './header.module.scss';

// eslint-disable-next-line react/prop-types
function Header({ city, onChangeCity }) {
  return (
    <header className={style.header}>
      <div className={style.logo}>Need for drive</div>
      <div className={style.city}>
        <img src={cityIcon} alt="City" />
        <div className={style.autocomplete}>
          <AutocompleteContainer placeholder="Выберите город" isFake />
        </div>
      </div>
    </header>
  );
}

export default Header;
