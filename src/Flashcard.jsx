// // src/Flashcard.jsx
// import React from 'react';

// function Flashcard({ text, onClick }) {
//   return (
//     <div className="flashcard" onClick={onClick}>
//       <p>{text}</p>
//     </div>
//   );
// }

// export default Flashcard;
// Flashcard.jsx
// Flashcard.jsx
// Flashcard.jsx
import React from 'react';

function Flashcard({ text, onClick }) {
  return (
    <div className="flashcard" onClick={onClick} style={{ cursor: 'pointer' }}>
      <p>{text}</p>
    </div>
  );
}



export default Flashcard;

