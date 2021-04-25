import React from 'react';
import { useSelector } from 'react-redux';
import cityIcon from '../../assets/city.svg';
import { selectOrderCity } from '../../store/selectors/orderSelectors';
import style from './header.module.scss';

function Header() {
  const orderCity = useSelector(selectOrderCity);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.body}>
          <div className={style.logo}>Need for drive</div>
          <div className={style.city}>
            <img src={cityIcon} alt="City" />
            <div className={style.cityName}>{orderCity.name}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
