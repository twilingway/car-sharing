/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import style from './filter-checkbox.module.scss';

function FilterCheckbox({
  id,
  checkboxs,
  groupName,
  onChangeBox,
  defaultChecked,
  isColumn,
}) {
  const [active, setActive] = useState({});

  useEffect(() => {
    if (defaultChecked) {
      setActive((prevState) => {
        const tempActive = { ...prevState };
        tempActive[defaultChecked] = true;
        return { ...tempActive };
      });
      onChangeBox(defaultChecked);
    }
  }, []);

  const handleChangeBox = (event) => {
    onChangeBox(event.target.value);
    setActive((prevState) => {
      const tempActive = { ...prevState };
      tempActive[event.target.value] = event.target.checked;

      return { ...tempActive };
    });
  };

  return (
    <section className={style.type}>
      <fieldset
        id={id}
        className={cn(style.group, { [style.column]: isColumn === true })}
        onChange={handleChangeBox}
      >
        <legend>{groupName}</legend>
        {checkboxs &&
          // eslint-disable-next-line react/prop-types
          checkboxs.map((checkbox) => (
            <label htmlFor={checkbox.id}>
              <input
                className={style.custom}
                id={checkbox.id}
                type="checkbox"
                name={groupName}
                value={checkbox.name}
                defaultChecked={defaultChecked === checkbox.name}
              />
              <span
                className={cn(style.span, {
                  [style.active]: active[checkbox.name] === true,
                })}
              >{`${checkbox.name}${checkbox.price}`}</span>
            </label>
          ))}
      </fieldset>
    </section>
  );
}

export default FilterCheckbox;
