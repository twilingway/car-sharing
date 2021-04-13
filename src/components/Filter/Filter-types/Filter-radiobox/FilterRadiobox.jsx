/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import style from './filter-radiobox.module.scss';

function FilterRadiobox({
  id,
  radios,
  rate,
  groupName,
  group,
  onChangeRadio,
  defaultChecked,
  isColumn,
  isAllRadio,
  allRadioText = 'Все',
  typeRadio,
}) {
  const [active, setActive] = useState('');

  const handleChangeRadio = (event) => {
    onChangeRadio(event);
    setActive(event);
  };

  useEffect(() => {
    if (defaultChecked) {
      setActive(defaultChecked);
      if (!isAllRadio) {
        radios.map(
          (item) => item.name === defaultChecked && onChangeRadio(item)
        );
      } else {
        onChangeRadio({ id: defaultChecked });
      }
    }
  }, []);

  return (
    <section className={style.type}>
      <fieldset
        id={id}
        className={cn(style.group, { [style.column]: isColumn === true })}
      >
        <legend>{groupName}</legend>
        {isAllRadio && radios && (
          <label htmlFor={allRadioText}>
            <input
              key={allRadioText}
              id={allRadioText}
              type="radio"
              name={group}
              value={allRadioText}
              defaultChecked={defaultChecked === allRadioText}
              onChange={() => handleChangeRadio({ id: allRadioText })}
            />
            <span
              className={cn({
                [style.active]:
                  active.id === allRadioText || defaultChecked === allRadioText,
              })}
            >
              {allRadioText}
            </span>
          </label>
        )}
        {radios &&
          !typeRadio &&
          radios.map((radio) => (
            <label htmlFor={radio.id}>
              <input
                key={radio.id}
                id={radio.id}
                type="radio"
                name={group}
                defaultChecked={defaultChecked === radio.name}
                onChange={() => handleChangeRadio(radio)}
              />
              <span
                className={cn({
                  [style.active]:
                    active.id === radio.id || defaultChecked === radio.name,
                })}
              >
                {radio.name}
              </span>
              <span
                className={cn(style.rate, {
                  [style.active]:
                    active.id === radio.id || defaultChecked === radio.name,
                })}
              >
                {rate &&
                  rate.map(
                    (item) =>
                      item.rateTypeId.id === radio.id &&
                      `${item.price} ₽/${item.rateTypeId.unit}`
                  )}
              </span>
            </label>
          ))}

        {radios &&
          typeRadio === 'color' &&
          radios.map((radio) => (
            <label htmlFor={radio} key={radio}>
              <input
                key={radio}
                id={radio}
                type="radio"
                name={group}
                defaultChecked={defaultChecked === radio}
                onChange={() => handleChangeRadio({ id: radio })}
              />
              <span className={cn({ [style.active]: active.id === radio })}>
                {radio}
              </span>
            </label>
          ))}
      </fieldset>
    </section>
  );
}

export default FilterRadiobox;
