import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cityIcon from '../../assets/city.svg';
import Autocomplete from '../Autocomplete';
import style from './header.module.scss';
import { getCitySelect, setCity } from '../../store/order';

const options2 = [
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранск' },
  { value: 'Самара', label: 'Самара' },
];

function Header() {
  const orderCity = useSelector(getCitySelect);

  const dispatch = useDispatch();

  const handleSelectCity = (city) => {
    dispatch(setCity(city));
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.body}>
          <div className={style.logo}>Need for drive</div>
          <div className={style.city}>
            <img src={cityIcon} alt="City" />
            <div className={style.autocomplete}>
              <Autocomplete
                options={options2}
                placeholder="Выберите город"
                isFake
                onOptionSelect={handleSelectCity}
                defaultOption={orderCity}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
