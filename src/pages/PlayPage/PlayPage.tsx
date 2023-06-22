import { useLocation, useNavigate } from 'react-router-dom';
import { IQuizz } from '../../store/quizzSlice';
import { useAppSelector } from '../../hooks/reduxHook';
import { getQuizByCategory } from '../../utils/getQuizByCategory';
import { useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import constants from '../../constants/common.json';

import styles from './PlayPage.module.scss';

export const PlayPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedQuizzes = queryParams.get('quizzes');
  const category = encodedQuizzes
    ? JSON.parse(decodeURIComponent(encodedQuizzes))
    : [];

  const { quizzes } = useAppSelector((state) => state.quizzReducer);

  const filteredQuizzes = getQuizByCategory(quizzes, category as string);

  useEffect(() => {
    filteredQuizzes.length === 0 && navigate('/');
  });

  const getAllAnswers = (quiz: IQuizz) => {
    const newAnswers = [...quiz.incorrect_answers, quiz.correct_answer];
    return newAnswers;
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.buttonContainer}>
          <Button onClick={() => navigate('/')} type='exit'>
            ❌
          </Button>
        </div>
        <h1 className={styles.logo}>{constants.PLAY}</h1>
      </header>
      {filteredQuizzes.map((quiz) => (
        <div key={quiz.question}>
          <p>{quiz.question}</p>
          <ul>
            {getAllAnswers(quiz).map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
