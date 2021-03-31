import React, { useState } from 'react';
import OrderContent from './OrderContent';
import AutocompleteContainer from '../Autocomplete';
import YandexMapContainer from '../YandexMap';
import CarListContainer from '../CarList/CarListContainer';

import style from './order-content-container.module.scss';

function OrderContentContainer() {
  // eslint-disable-next-line no-unused-vars
  const [step, setStep] = useState(1);

  return (
    <section className={style.container}>
      <OrderContent>
        {step === 1 && (
          <>
            <div className={style.autocomplete}>
              <div className={style.city}>
                <AutocompleteContainer
                  label="Город"
                  placeholder="Выберите город"
                  isBorder
                />
              </div>
              <div className={style.street}>
                <AutocompleteContainer
                  label="Пункт выдачи"
                  placeholder="Начните вводить пункт ..."
                  isBorder
                />
              </div>
            </div>

            <YandexMapContainer />
          </>
        )}
        {step === 2 && (
          <>
            {/* <div className={style.carList}> */}
            <CarListContainer />
            {/* </div> */}
          </>
        )}
      </OrderContent>
    </section>
  );
}

export default OrderContentContainer;
