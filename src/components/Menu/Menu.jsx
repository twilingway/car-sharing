import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Telegram } from '../../assets/telegram_white.svg';
import { ReactComponent as Facebook } from '../../assets/facebook_white.svg';
import { ReactComponent as Instagram } from '../../assets/instagram_white.svg';

import style from './menu.module.scss';

const MENU = [
  {
    id: '1',
    title: 'ПАРКОВКА',
    to: '/',
  },
  {
    id: '2',
    title: 'СТРАХОВКА',
    to: '/',
  },
  {
    id: '3',
    title: 'БЕНЗИН',
    to: '/',
  },
  {
    id: '4',
    title: 'ОБСЛУЖИВАНИЕ',
    to: '/',
  },
];

function Menu({ onClickMenu }) {
  return (
    <div
      className={cn(style.wrapper, {
        [style.active]: true,
      })}
    >
      <div className={style.container}>
        <div className={style.list}>
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
          <a href="https://web.telegram.org/">
            <Telegram />
          </a>
          <a href="https://www.facebook.com/">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/">
            <Instagram />
          </a>
        </section>
      </div>
      <div className={style.darkside} />
    </div>
  );
}

Menu.propTypes = {
  onClickMenu: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
