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
    setActive(event.target.value);
    if (typeRadio === 'color') {
      onChangeRadio(event.target.value);
    } else {
      onChangeRadio(event.target.id);
    }
  };

  useEffect(() => {
    if (defaultChecked) {
      setActive(defaultChecked);
      onChangeRadio(defaultChecked);
    }
  }, []);

  return (
    <section className={style.type}>
      <fieldset
        id={id}
        className={cn(style.group, { [style.column]: isColumn === true })}
        onChange={handleChangeRadio}
      >
        <legend>{groupName}</legend>
        {isAllRadio && radios && (
          <label htmlFor={allRadioText}>
            <input
              id={allRadioText}
              type="radio"
              name={group}
              value={allRadioText}
              defaultChecked={defaultChecked === allRadioText}
            />
            <span className={cn({ [style.active]: active === allRadioText })}>
              {allRadioText}
            </span>
          </label>
        )}
        {radios &&
          // eslint-disable-next-line react/prop-types
          !typeRadio &&
          radios.map((radio) => (
            <label htmlFor={radio.id}>
              <input
                key={radio.id}
                id={radio.id}
                type="radio"
                name={group}
                value={radio.name}
                defaultChecked={defaultChecked === radio.name}
              />
              <span className={cn({ [style.active]: active === radio.name })}>
                {radio.name}
              </span>
              <span className={style.rate}>
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
          // eslint-disable-next-line react/prop-types
          typeRadio === 'color' &&
          radios.map((radio) => (
            <label htmlFor={radio.id} key={radio.id}>
              <input
                // id={radio.id}
                type="radio"
                name={group}
                value={radio}
                defaultChecked={defaultChecked === radio}
              />
              <span className={cn({ [style.active]: active === radio })}>
                {radio}
              </span>
            </label>
          ))}
      </fieldset>
    </section>
  );
}

export default FilterRadiobox;
