import React from 'react';
import SearchBar from 'widgets/searchBar/SearchBar';
import CardsLists from './cards/CardsLists';

function Main() {
  return (
    <div className="App">
      <SearchBar />
      <CardsLists />
    </div>
  );
}

export default Main;
