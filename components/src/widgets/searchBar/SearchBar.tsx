import React, { ChangeEvent, useEffect, useState } from 'react';

import style from '../searchBar/SearchBar.module.css';

function SearchBar() {
  const [value, setValue] = useState<string>(localStorage.getItem('searchValue') ?? '');

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', value);
    };
  }, [value]);

  return (
    <div className={style.searchBar}>
      <input type="text" value={value} onChange={onChangeInputHandler} placeholder="Search" />
    </div>
  );
}

export default SearchBar;
