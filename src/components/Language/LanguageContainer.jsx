/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import cn from 'classnames';
import Language from './Language';

import style from './language-container.module.scss';

function LanguageContainer({ isOpen }) {
  const [lang, setLang] = useState('Рус');

  const handleChangeLanguage = () => {
    if (lang === 'Рус') {
      setLang('Eng');
    } else {
      setLang('Рус');
    }
  };
  return (
    <div className={cn(style.wrapper, { [style.hidden]: isOpen === true })}>
      <Language lang={lang} onChangeLanguage={handleChangeLanguage} />
    </div>
  );
}

export default LanguageContainer;
