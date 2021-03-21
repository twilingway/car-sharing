import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './style.module.scss';
import Language from '../Language';

function SideBar({ isOpen, bgActive, onClickHamburger }) {
  return (
    <nav className={classNames(style.root, { [style.bgActive]: bgActive })}>
      <div className={style.navWrapper}>
        <div
          tabIndex={0}
          role="button"
          onClick={onClickHamburger}
          onKeyPress={onClickHamburger}
          className={classNames(style.menuButton, {
            [style.active]: isOpen === true,
          })}
        >
          <span />
        </div>
        {!isOpen && <Language />}
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
