/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as X } from '../../assets/x.svg';
import cityIcon from '../../assets/city.svg';
import Autocomplete from '../Autocomplete';
import style from './header.module.scss';
import { getCitySelect, setCity } from '../../store/order';
import Hamburger from '../Hamburger';
import Menu from '../Menu';
import { getMenuStatusSelect, setMenuStatus } from '../../store/menu';
import SideBar from '../Sidebar';

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
// eslint-disable-next-line react/prop-types
function Header() {
  const orderCity = useSelector(getCitySelect);
  const menuIsActiveRedux = useSelector(getMenuStatusSelect);

  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(null);

  const onClickHamburgerOrMenu = () => {
    dispatch(setMenuStatus(!menuIsActiveRedux));
  };

  const handleSelectCity = (city) => {
    dispatch(setCity(city));
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.body}>
          {/* <div className={style.burger}>
            <Hamburger
              onClickHamburger={onClickHamburgerOrMenu}
              isOpen={menuIsActiveRedux}
            />
          </div> */}
          {/* <SideBar /> */}
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

          {/* {menuIsActiveRedux && <Menu onClickMenu={onClickHamburgerOrMenu} />} */}
        </div>
      </div>
    </header>
  );
}

export default Header;
