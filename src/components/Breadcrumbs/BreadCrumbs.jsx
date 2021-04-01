/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ReactComponent as Crumb } from '../../assets/crumb.svg';
import style from './breadcrumbs.module.scss';

function BreadCrumbs({ crumbs, step, onStepClick }) {
  return (
    <section className={style.crumbs}>
      <ul>
        {crumbs &&
          crumbs.map(({ name, id }) => (
            <li key={id} className={cn({ [style.active]: id === step })}>
              <span
                className={style.name}
                role="button"
                tabIndex={0}
                onClick={() => onStepClick(id)}
                onKeyDown={() => onStepClick(id)}
              >
                {name}
              </span>
              <span className={style.span}>
                {id !== crumbs.length - 1 && <Crumb />}
              </span>
            </li>
          ))}
      </ul>
    </section>
  );
}

BreadCrumbs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  crumbs: PropTypes.array.isRequired,
};

export default BreadCrumbs;
