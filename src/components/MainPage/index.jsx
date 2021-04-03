import React from 'react';
import Layout from '../Layout';
import Slider from '../Slider';

import style from './style.module.scss';

function MainPage() {
  return (
    <>
      <div className={style.wrap}>
        <Layout />
        <Slider />
      </div>
    </>
  );
}

export default MainPage;
