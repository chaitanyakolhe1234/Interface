// SearchBar.js
// SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onVoiceAssistant }) => {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..." />
      <button className="voice-button" onClick={onVoiceAssistant}>Voice</button>
    </div>
  );
};

export default SearchBar;
