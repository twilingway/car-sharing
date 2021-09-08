import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuStatusSelect, setMenuStatus } from '../../store/menu';
import Menu from '../Menu';
import SideBar from './SideBar';

function SideBarContainer() {
  const menuIsActiveRedux = useSelector(getMenuStatusSelect);
  const dispatch = useDispatch();

  const onClickHamburgerOrMenu = () => {
    dispatch(setMenuStatus(!menuIsActiveRedux));
  };

  return (
    <>
      {menuIsActiveRedux && <Menu onClickMenu={onClickHamburgerOrMenu} />}
      <SideBar
        isOpen={menuIsActiveRedux}
        onClickHamburger={onClickHamburgerOrMenu}
      />
    </>
  );
}

export default SideBarContainer;
