import React, { useState } from 'react';
import Menu from '../Menu';
import SideBar from '../Sidebar';

// eslint-disable-next-line react/prop-types
function MenuHeader({ bgActive }) {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setOpen] = useState(null);

  const onClickHamburgerOrMenu = () => {
    setOpen((prevState) => !prevState);
    console.log('object :>> ');
  };
  return (
    <>
      <Menu isOpen={isOpen} onClickMenu={onClickHamburgerOrMenu} />
      <SideBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburger={onClickHamburgerOrMenu}
      />
    </>
  );
}

export default MenuHeader;
