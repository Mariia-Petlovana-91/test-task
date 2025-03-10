import { useState, useEffect } from 'react';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Form from '../Form/Form';
import { quizData } from '../../utils/quiz';

const Quiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [userAnswer, setUserAnsver] = useState([]);
  const onAnswerClick = (choise) => {
    setUserAnsver(() => [...userAnswer, choise]);
    setcurrentQuestion((prev) => prev + 1);
  };

  useEffect(() => {}, [userAnswer, currentQuestion]);
  return (
    <div>
      <ResponsiveImage />
      {userAnswer.length === quizData.length ? (
        <Form quizAnswer={userAnswer} />
      ) : (
        <div>
          <h2>{quizData[currentQuestion].question}</h2>
          <ul>
            {quizData[currentQuestion].answers.map((answer, index) => (
              <li key={index}>
                <button type="button" onClick={() => onAnswerClick(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          <p>
            {userAnswer.length}/{quizData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
