import React from 'react';

import SearchBar from 'widgets/SearchBar/SearchBar';
import CardsLists from './cards/CardsLists';

function Main() {
  return (
    <div>
      <h1>Main</h1>
      <SearchBar />
      <CardsLists />
    </div>
  );
}

export default Main;
