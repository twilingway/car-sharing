import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Hamburger from '../Hamburger';

import LanguageContainer from '../Language';

import style from './sidebar.module.scss';

function SideBar({ isOpen, bgActive, onClickHamburger }) {
  return (
    <nav className={cn(style.root, { [style.bgActive]: bgActive })}>
      <div className={style.navWrapper}>
        <div className={style.hamburger}>
          <Hamburger onClickHamburger={onClickHamburger} isOpen={isOpen} />
        </div>
        <LanguageContainer isOpen={isOpen} />
      </div>
    </nav>
  );
}

SideBar.propTypes = {
  isOpen: PropTypes.bool,
  bgActive: PropTypes.bool,
  onClickHamburger: PropTypes.func.isRequired,
};

SideBar.defaultProps = {
  isOpen: null,
  bgActive: false,
};

export default SideBar;
