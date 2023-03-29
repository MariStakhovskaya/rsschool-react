import React, { ChangeEvent } from 'react';
import { Component } from 'react';
import style from '../SearchBar/SearchBar.module.css';

type PropsType = Record<string, never>;
type StateType = { inputValue: string };

class SearchBar extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    const localValue = localStorage.getItem('searchValue');
    this.state = { inputValue: localValue ?? '' };
  }

  onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.currentTarget.value });
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.inputValue);
  }

  render() {
    return (
      <div className={style.searchBar}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onChangeInputHandler.bind(this)}
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchBar;
