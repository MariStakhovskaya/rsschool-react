import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store/store';
import style from '../searchBar/SearchBar.module.css';
import { searchValue, setSearchValue } from 'app/store/slices/searchSlice';

function SearchBar() {
  const searchValInput = useSelector(searchValue);
  const dispatch = useDispatch<AppDispatch>();

  const [value, setValue] = useState<string>(searchValInput ?? '');

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onHandlerClick = () => {
    dispatch(setSearchValue(value));
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      dispatch(setSearchValue(value));
    }
  };

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
