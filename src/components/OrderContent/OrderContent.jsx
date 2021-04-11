import React from 'react';

import style from './orderContent.module.scss';

// eslint-disable-next-line react/prop-types
function OrderContent({ children }) {
  return <div className={style.wrapper}>{children}</div>;
}

export default OrderContent;
