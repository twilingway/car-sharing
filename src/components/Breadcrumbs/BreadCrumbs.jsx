import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Crumb } from '../../assets/crumb.svg';
import style from './breadcrumbs.module.scss';

function BreadCrumbs({ crumbs }) {
  return (
    <section className={style.crumbs}>
      <ul>
        {crumbs &&
          crumbs.map(({ name, id }) => (
            <li key={id}>
              {name}
              <span>{id !== crumbs.length - 1 && <Crumb />}</span>
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
