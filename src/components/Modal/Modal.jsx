/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import style from './modal.module.scss';

function Modal({ title, children }) {
  return (
    <div className={cn(style.root, { [style.open]: true })}>
      <div className={style.modal}>
        {title && (
          <div className={style.head}>
            {title}
            <span className={style.btnClose} />
          </div>
        )}
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
