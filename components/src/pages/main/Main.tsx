import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'widgets/searchBar/SearchBar';
import CardsLists from './cards/CardsLists';
import Loader from 'widgets/loader/Loader';
import { searchValue } from 'app/store/slices/searchSlice';
import { AppDispatch } from 'app/store/store';
import { fetchCards, loading } from 'app/store/slices/cardsSlice';

function Main() {
  const searchValInput = useSelector(searchValue);
  const isLoading = useSelector(loading);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCards({ searchValInput }));
  }, [searchValInput, dispatch]);

  return (
    <div data-testid="toMain">
      <h1>Main</h1>
      <SearchBar />
      {isLoading ? <Loader /> : <CardsLists />}
    </div>
  );
}

export default Main;
