import React, { ChangeEvent } from 'react';
import { Component } from 'react';
import style from '../searchBar/SearchBar.module.css';

class SearchBar extends Component {
  state = { inputValue: '' };

  onChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.currentTarget.value });
    localStorage.setItem('searchValue', this.state.inputValue);
  }
  componentDidMount() {
    const localValue = localStorage.getItem('searchValue');
    if (localValue) {
      this.setState({ inputValue: localValue });
    }
  }

  render() {
    return (
      <div className={style.searchBar}>
        <input type="text" value={this.state.inputValue} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

export default SearchBar;
