
import React from 'react';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
import Keyboard from './Keyboard/Keyboard';
import SearchButton from './SearchButton/SearchButton';


const App = () => {
  const handleSearch = () => {
    
    console.log('Searching...');
  };

  const handleVoiceAssistant = () => {
    
    console.log('Voice Assistant activated...');
  };

  const handleKeyPress = (key) => {
    
    console.log(`Key pressed: ${key}`);
  };

  

  return (
    <div>
      
      <NavBar />
      <SearchBar onSearch={handleSearch} onVoiceAssistant={handleVoiceAssistant} />
      <Keyboard onKeyPress={handleKeyPress} />
      <SearchButton onSearch={handleSearch} />
    </div>
  );
};

export default App;
