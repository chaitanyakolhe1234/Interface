
import React from 'react';
import './Keyboard.css';

const Keyboard = ({ onKeyPress }) => {
  const keyboardLayout = [
    'QWERTYUIOP',
    'ASDFGHJKL',
    'ZXCVBNM',
  ];

  return (
    <div className="keyboard-container">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split('').map((key, keyIndex) => (
            <button key={keyIndex} onClick={() => onKeyPress(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
