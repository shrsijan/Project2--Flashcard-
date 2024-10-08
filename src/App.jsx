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
  const [showAnswer, setShowAnswer] = useState(false);
  const [guess, setGuess] = useState('');
  const [streak, setStreak] = useState(0);

  const handleCardClick = () => {
    setShowAnswer(true);
  };

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = cards[currentCardIndex].answer;
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      alert('Correct!');
      setStreak(streak + 1);
    } else {
      alert(`Incorrect! The correct answer was: ${correctAnswer}`);
      setStreak(0);
    }
    setGuess('');
    setShowAnswer(true);
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setShowAnswer(false);
  };

  const handlePreviousClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    setShowAnswer(false);
  };

  return (
    <div className="app">
      <h1>Nepali Language Learning Flashcards</h1>
      <p>Current streak: {streak}</p>
      <Flashcard
        text={showAnswer ? cards[currentCardIndex].answer : cards[currentCardIndex].question}
        onClick={handleCardClick}
      />
      {!showAnswer && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={guess}
            onChange={handleChange}
            placeholder="Enter your guess"
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <button onClick={handlePreviousClick} disabled={currentCardIndex === 0}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default App;

