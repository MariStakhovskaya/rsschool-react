import React, { useEffect, useState } from 'react';
import SearchBar from 'widgets/searchBar/SearchBar';
import CardsLists from './cards/CardsLists';
import Loader from 'widgets/loader/Loader';

export type cardsStateType = {
  description: string;
  id: string;
  urls: { regular: string };
  likes: number;
  user: { name: string };
};

function Main() {
  const [cardsState, setCardsState] = useState([]);
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') ?? 'photo'
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const api_client = 'FQaqffAe_xyl_Nk8sPtJKSI4qNlYVajbVY-XzJH5zPM';
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&client_id=${api_client}`)
      .then((response) => response.json())
      .then((data) => {
        setCardsState(data.results);
        setIsLoading(false);
      });
  }, [searchValue]);

  return (
    <div data-testid="toMain">
      <h1>Main</h1>
      <SearchBar setSearchValue={setSearchValue} />
      {isLoading ? <Loader /> : <CardsLists cards={cardsState} />}
    </div>
  );
}

export default Main;
