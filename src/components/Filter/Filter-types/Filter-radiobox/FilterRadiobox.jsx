/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import style from './filter-radiobox.module.scss';

function FilterRadiobox({
  id,
  radios,
  groupName,
  onChangeRadio,
  defaultChecked,
  isColumn,
}) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (defaultChecked) {
      setActive(defaultChecked);
      onChangeRadio(defaultChecked);
    }
  }, []);

  const handleChangeRadio = (event) => {
    onChangeRadio(event.target.value);
    setActive(event.target.value);
  };

  return (
    <section className={style.type}>
      <fieldset
        id={id}
        className={cn(style.group, { [style.column]: isColumn === true })}
        onChange={handleChangeRadio}
      >
        <legend>{groupName}</legend>
        {radios &&
          // eslint-disable-next-line react/prop-types
          radios.map((radio) => (
            <label htmlFor={radio.id}>
              <input
                id={radio.id}
                type="radio"
                name={groupName}
                value={radio.name}
                defaultChecked={defaultChecked === radio.name}
              />
              <span className={cn({ [style.active]: active === radio.name })}>
                {radio.name}
              </span>
            </label>
          ))}
      </fieldset>
    </section>
  );
}

export default FilterRadiobox;
