import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import SideBar from '../Sidebar';

function MenuHeader({ bgActive }) {
  const [isOpen, setOpen] = useState(null);

  const onClickHamburgerOrMenu = () => {
    setOpen((prevState) => !prevState);
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

MenuHeader.propTypes = {
  bgActive: PropTypes.bool,
};

MenuHeader.defaultProps = {
  bgActive: null,
};

export default MenuHeader;
