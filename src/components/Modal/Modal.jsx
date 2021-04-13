/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import style from './modal.module.scss';
import Button from '../Button';

function Modal({ title, onConfirmClick, onReturnClick }) {
  return (
    <div className={cn(style.root, { [style.open]: true })}>
      <div className={style.modal}>
        {title && (
          <div className={style.head}>
            {title}
            <span className={style.btnClose} />
          </div>
        )}
        <div className={style.content}>
          <div className={style.confirm}>
            <div className={style.title}>Подтвердить заказ</div>
            <div className={style.buttons}>
              <div className={style.buttonConfirm}>
                <Button
                  name="Подтвердить"
                  onClickHandler={() => onConfirmClick()}
                />
              </div>
              <div className={style.buttonReturn}>
                <Button
                  className={style.button}
                  name="Вернуться"
                  onClickHandler={() => onReturnClick()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
