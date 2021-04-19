/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import DatePicker from 'react-datepicker';
import FilterCheckbox from '../Filter/Filter-types/Filter-checkbox';
import FilterRadiobox from '../Filter/Filter-types/Filter-radiobox';
import FilterDate from '../Filter/Filter-types/Filter-date';
import 'react-datepicker/dist/react-datepicker.css';
import style from './extra.module.scss';

function Extra({
  orderRedux,
  rateRedux,
  rateTypeRedux,
  onFilterStartPassedTime,
  onFilterEndPassedTime,
  onColorChange,
  orderCarColors,
  onChangeDateFrom,
  onChangeDateTo,
  onSelectRate,
  onChangeServices,
}) {
  return (
    <div>
      <div className={style.color}>
        <FilterRadiobox
          radios={orderCarColors}
          onChangeRadio={onColorChange}
          groupName="Цвет"
          group="color"
          defaultChecked={orderRedux.color ?? 'Любой'}
          isAllRadio
          allRadioText="Любой"
          typeRadio="color"
        />
      </div>

      <div className={style.type}>
        <div className={style.group}>
          <legend>Дата аренды</legend>
          <div className={style.datapickerWrapper}>
            <span>C</span>
            <DatePicker
              selected={orderRedux?.dateFrom}
              onChange={(date) => onChangeDateFrom(date)}
              showTimeSelect
              filterTime={onFilterStartPassedTime}
              timeFormat="HH:mm"
              timeIntervals={1}
              dateFormat="dd.MM.yyyy HH:mm"
              timeCaption="time"
              minDate={new Date()}
              isClearable
              placeholderText="Ведите дату и время"
              className={style.datapicker}
            />
          </div>
          <div className={style.datapickerWrapper}>
            <span>По</span>
            <DatePicker
              selected={orderRedux?.dateTo}
              onChange={(date) => onChangeDateTo(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={1}
              dateFormat="dd.MM.yyyy HH:mm"
              timeCaption="time"
              minDate={orderRedux?.dateFrom}
              filterTime={onFilterEndPassedTime}
              isClearable
              placeholderText="Ведите дату и время"
              className={style.datapicker}
              onKeyDown={(date) => {}}
              disabled={!orderRedux.dateFrom}
            />
          </div>
        </div>
      </div>
      <div className={style.tariff}>
        {!rateTypeRedux.isLoading && (
          <FilterRadiobox
            radios={rateTypeRedux.data}
            rate={rateRedux.data}
            onChangeRadio={onSelectRate}
            groupName="Тариф"
            group="rate"
            defaultChecked={orderRedux.rateId.name ?? 'На сутки'}
            isColumn
          />
        )}
      </div>
      <div className={style.services}>
        <FilterCheckbox
          checkboxs={[
            {
              id: 'isFullTank',
              isFullTank: orderRedux.isFullTank,
              name: 'Полный бак',
              price: ', 500р',
            },
            {
              id: 'isNeedChildChair',
              isNeedChildChair: orderRedux.isNeedChildChair,
              name: 'Детское кресло',
              price: ', 200р',
            },
            {
              id: 'isRightWheel',
              isRightWheel: orderRedux.isRightWheel,
              name: 'Правый руль',
              price: ', 1600р',
            },
          ]}
          onChangeBox={onChangeServices}
          groupName="Доп услуги"
          defaultChecked={orderRedux.isFullTank === null && 'Полный бак'}
          isColumn
        />
      </div>
    </div>
  );
}

export default Extra;
