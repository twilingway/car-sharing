import React from 'react';
import Layout from '../Layout';
import MenuHeader from '../MenuHeader';
import Slider from '../Slider';

import style from './style.module.scss';

function MainPage() {
  return (
    <>
      <div className={style.wrap}>
        <MenuHeader />
        <Layout />
        <Slider />
      </div>
    </>
  );
}

export default MainPage;
