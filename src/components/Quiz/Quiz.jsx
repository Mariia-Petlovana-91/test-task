import { useState } from 'react';

import css from './Quiz.module.css';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Form from '../Form/Form';

import { quizData } from '../../utils/quiz';

const Quiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [userAnswer, setUserAnsver] = useState([]);
  const onAnswerClick = (choise) => {
    setUserAnsver((prev) => [...prev, choise]);
    setcurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className={css.quizContainer}>
      {userAnswer.length === quizData.length ? (
        <Form quizAnswer={userAnswer} />
      ) : (
        <div className={css.quizQuestionContainer}>
          <h3 className={css.quizQuestionTitle}>
            {quizData[currentQuestion].question}
          </h3>
          <p className={css.quizQuestionDescript}>
            {quizData[currentQuestion].description}
          </p>

          <ul className={css.quizQuestionList}>
            {quizData[currentQuestion].answers.map((answer, index) => (
              <li className={css.quizQuestionItem} key={index}>
                <button
                  className="btn"
                  type="button"
                  onClick={() => onAnswerClick(answer)}
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          <p className={css.quizNumber}>
            {userAnswer.length}/{quizData.length}
          </p>
        </div>
      )}
      <ResponsiveImage />
    </div>
  );
};

export default Quiz;
