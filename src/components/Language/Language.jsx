import React from 'react';

import style from './language.module.scss';

// eslint-disable-next-line react/prop-types
function Language({ lang, onChangeLanguage }) {
  return (
    <div
      className={style.content}
      tabIndex={-1}
      role="button"
      onKeyPress={onChangeLanguage}
      onClick={onChangeLanguage}
    >
      <div>
        <p>{lang}</p>
      </div>
    </div>
  );
}

export default Language;
