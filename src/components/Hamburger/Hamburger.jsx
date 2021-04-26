/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';

import style from './hamburger.module.scss';

function Hamburger({ isOpen, onClickHamburger }) {
  return (
    <div
      tabIndex={0}
      role="button"
      onClick={onClickHamburger}
      onKeyPress={onClickHamburger}
      className={cn(style.burger, {
        [style.active]: isOpen === true,
      })}
    >
      <span />
    </div>
  );
}

export default Hamburger;
