import React, { useState } from 'react';

import style from './language.module.scss';

function Language() {
  const [lang, setLang] = useState('Рус');

  const setLanguage = () => {
    if (lang === 'Рус') {
      setLang('Eng');
    } else {
      setLang('Рус');
    }
  };
  return (
    <div
      className={style.language}
      tabIndex={-1}
      role="button"
      onKeyPress={setLanguage}
      onClick={setLanguage}
    >
      <div>
        <p>{lang}</p>
      </div>
    </div>
  );
}

export default Language;
