import { useState, useEffect } from 'react';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Form from '../Form/Form';
import { quizData } from '../../utils/quiz';

console.log(quizData);

const Quiz = () => {
  const [question, setQuestion] = useState();
  const quizChoise = [];
  return (
    <>
      <div>
        <ResponsiveImage />
        <div>
          <p></p>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <Form />;
    </>
  );
};

export default Quiz;
