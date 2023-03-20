import React, { ChangeEvent } from 'react';
import { Component } from 'react';
import style from '../searchBar/SearchBar.module.css';

type PropsType = Record<string, never>;
type StateType = { inputValue: string };

class SearchBar extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { inputValue: '' };
    this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
  }

  componentDidMount() {
    const localValue = localStorage.getItem('searchValue');
    if (localValue) {
      this.setState({ inputValue: localValue });
    }
  }

  onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.currentTarget.value });
    localStorage.setItem('searchValue', this.state.inputValue);
  }

  render() {
    return (
      <div className={style.searchBar}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onChangeInputHandler}
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchBar;
