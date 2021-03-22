import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Telegram } from '../../assets/telegram_white.svg';
import { ReactComponent as Facebook } from '../../assets/facebook_white.svg';
import { ReactComponent as Instagram } from '../../assets/instagram_white.svg';

import style from './style.module.scss';

const MENU = [
  {
    id: '1',
    title: 'ПАРКОВКА',
    to: '/parking',
  },
  {
    id: '2',
    title: 'СТРАХОВКА',
    to: '/insurance',
  },
  {
    id: '3',
    title: 'БЕНЗИН',
    to: '/petrol',
  },
  {
    id: '4',
    title: 'ОБСЛУЖИВАНИЕ',
    to: '/service',
  },
];

function Menu({ isOpen, onClickMenu }) {
  return (
    <div
      className={classNames(style.menuContainer, {
        [style.active]: isOpen === true,
        [style.deactive]: isOpen === false,
      })}
    >
      <div className={style.container}>
        <div className={style.menuItems}>
          <ul>
            {MENU.map(({ title, to, id }) => (
              <li key={id}>
                <Link to={to} onClick={onClickMenu}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <section className={style.network}>
          <Link to="/#">
            <Telegram />
          </Link>
          <Link to="/#">
            <Facebook />
          </Link>
          <Link to="/#">
            <Instagram />
          </Link>
        </section>
      </div>
      <div className={style.darkside} />
    </div>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
  onClickMenu: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  isOpen: null,
};

export default Menu;
