import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './style.module.scss';

// eslint-disable-next-line react/prop-types
function SideBar({ isOpen, bgActive = false, onClickHamburger }) {
  return (
    <nav className={classNames(style.root, { [style.bgActive]: bgActive })}>
      <div className={style.navWrapper}>
        <div
          tabIndex={0}
          role="button"
          onClick={onClickHamburger}
          onKeyPress={onClickHamburger}
          className={classNames(style.menuButton, { [style.active]: isOpen })}
        >
          <span />
        </div>
        <p className={style.brand}>LOGO</p>
      </div>
    </nav>
  );
}

// NavBar.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   bgActive: PropTypes.bool.isRequired,
//   onClickHamburger: PropTypes.func.isRequired,
// };

export default SideBar;
