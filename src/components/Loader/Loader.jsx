import React from 'react';
import cn from 'classnames';
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';

import s from './loader.module.scss';

function Loader() {
  return (
    <span
      className={cn(s.loader, {
        [s.loading]: true,
      })}
    >
      <Ellipse />
    </span>
  );
}

export default Loader;
