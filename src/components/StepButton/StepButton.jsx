/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import buttonName from './buttonSteps.json';
import Button from '../Button';

import s from './stepbutton.module.scss';

function StepButton({ onClickHandler, order }) {
  return (
    <div className={cn(s.button, { [s.cancel]: order.step === 6 })}>
      {buttonName
        .filter((item) => item.id === order.step)
        .map((item) => (
          <Button
            key={item.id}
            name={item.name}
            disabled={order.lastStepValidate < item.id}
            onClickHandler={() => onClickHandler && onClickHandler(item.id)}
          />
        ))}
    </div>
  );
}

export default StepButton;
