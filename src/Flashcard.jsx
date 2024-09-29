// src/Flashcard.jsx
import React from 'react';

function Flashcard({ text, onClick }) {
  return (
    <div className="flashcard" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default Flashcard;
