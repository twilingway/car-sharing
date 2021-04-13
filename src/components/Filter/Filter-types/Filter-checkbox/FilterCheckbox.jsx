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
      checkboxs.map(
        (item) =>
          item.name === defaultChecked &&
          item[item.id] !== true &&
          onChangeBox(item.id)
      );
    }
  }, []);

  const handleChangeBox = (event) => {
    onChangeBox(event.target.id);

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
          checkboxs.map((checkbox) => (
            <label htmlFor={checkbox.id} key={checkbox.id}>
              <input
                className={style.custom}
                id={checkbox.id}
                type="checkbox"
                name={groupName}
                value={checkbox.name}
                defaultChecked={
                  defaultChecked === checkbox.name || checkbox[checkbox.id]
                }
              />
              <span
                className={cn(style.span, {
                  [style.active]:
                    active[checkbox.name] === true || checkbox[checkbox.id],
                })}
              >{`${checkbox.name}${checkbox.price}`}</span>
            </label>
          ))}
      </fieldset>
    </section>
  );
}

export default FilterCheckbox;
