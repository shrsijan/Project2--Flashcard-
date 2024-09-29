import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './index.css';

function App() {
  const cards = [
    { question: 'Hello', answer: 'नमस्ते (Namaste)' },
    { question: 'Thank you', answer: 'धन्यवाद (Dhanyabad)' },
    { question: 'Yes', answer: 'हो (Ho)' },
    { question: 'No', answer: 'होइन (Hoina)' },
    { question: 'Please', answer: 'कृपया (Kripaya)' },
    { question: 'Excuse me', answer: 'माफ गर्नुहोस् (Maaf garnuhos)' },
    { question: 'How are you?', answer: 'तपाईंलाई कस्तो छ? (Tapainlai kasto cha?)' },
    { question: 'I am fine', answer: 'म ठिक छु (Ma thik chu)' },
    { question: 'What is your name?', answer: 'तपाईंको नाम के हो? (Tapainko naam ke ho?)' },
    { question: 'My name is...', answer: 'मेरो नाम ... हो (Mero naam ... ho)' },
    { question: 'Where is the bathroom?', answer: 'शौचालय कता छ? (Sauchalaya kata cha?)' },
    { question: 'I don’t understand', answer: 'म बुझिनँ (Ma bujhina)' },
    { question: 'Help!', answer: 'मद्दत गर्नुहोस्! (Maddat garnuhos!)' },
    { question: 'Good morning', answer: 'शुभ प्रभात (Shubha Prabhat)' },
    { question: 'Good night', answer: 'शुभ रात्री (Shubha Ratri)' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const totalCards = cards.length;

  const handleCardClick = () => {
    setShowQuestion(!showQuestion);
  };

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * totalCards);
    setCurrentCardIndex(randomIndex);
    setShowQuestion(true);
  };

  return (
    <div className="app">
      <h1>Nepali Language Flashcards</h1>
      <p>Practice basic Nepali words and phrases. Total cards: {totalCards}</p>
      <Flashcard
        text={showQuestion ? cards[currentCardIndex].question : cards[currentCardIndex].answer}
        onClick={handleCardClick}
      />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default App;
