import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

import style from '../searchBar/SearchBar.module.css';

type propsType = {
  setSearchValue: (searchValue: string) => void;
};

function SearchBar({ setSearchValue }: propsType) {
  const [value, setValue] = useState<string>(localStorage.getItem('searchValue') ?? '');
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onHandlerClick = () => {
    setSearchValue(value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setSearchValue(value);
    }
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', value);
    };
  }, [value]);

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        value={value}
        onChange={onChangeInputHandler}
        placeholder="Search"
        onKeyDown={onKeyPressHandler}
      />
      <button onClick={onHandlerClick}>Search</button>
    </div>
  );
}

export default SearchBar;
