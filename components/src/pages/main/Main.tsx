import React from 'react';
import { Component } from 'react';
import SearchBar from 'widgets/searchBar/SearchBar';
import CardsLists from './cards/CardsLists';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <SearchBar />
        <CardsLists />
      </div>
    );
  }
}

export default Main;
