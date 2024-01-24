
import React from 'react';
import './SearchButton.css';

const SearchButton = ({ onClick }) => {
  return (
    <button className="search-button" onClick={onClick}>
      Search
    </button>
  );
};

export default SearchButton;


