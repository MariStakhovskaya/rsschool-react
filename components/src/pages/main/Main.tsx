import React, { useEffect, useState } from 'react';
import SearchBar from 'widgets/searchBar/SearchBar';
import CardsLists from './cards/CardsLists';
import Loader from 'widgets/loader/Loader';
import { api_client } from './constants/api';
import { useSelector } from 'react-redux';
import { searchValue } from 'app/store/slices/searchSlice';

export type cardsStateType = {
  description: string;
  id: string;
  urls: { regular: string };
  likes: number;
  user: { name: string };
};

function Main() {
  const [cardsState, setCardsState] = useState([]);
  const searchValInput = useSelector(searchValue);
  // const [searchValue, setSearchValue] = useState<string>(
  //   localStorage.getItem('searchValue') ?? 'photo'
  // );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.unsplash.com/search/photos?query=${searchValInput}&client_id=${api_client}`)
      .then((response) => response.json())
      .then((data) => {
        setCardsState(data.results);
        setIsLoading(false);
      });
  }, [searchValInput]);

  return (
    <div data-testid="toMain">
      <h1>Main</h1>
      <SearchBar />
      {isLoading ? <Loader /> : <CardsLists cards={cardsState} />}
    </div>
  );
}

export default Main;
