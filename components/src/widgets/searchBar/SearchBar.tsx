import React, { ChangeEvent, useEffect, useState } from 'react';

import style from '../SearchBar/SearchBar.module.css';

function SearchBar() {
  const localValue = localStorage.getItem('searchValue');
  const [value, setValue] = useState<string>(localValue ?? '');

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('searchValue', value);
  }, [value]);

  return (
    <div className={style.searchBar}>
      <input type="text" value={value} onChange={onChangeInputHandler} placeholder="Search" />
    </div>
  );
}

export default SearchBar;
