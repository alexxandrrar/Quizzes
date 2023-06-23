import { useLocation, useNavigate } from 'react-router-dom';
import { IQuizz } from '../../store/quizzSlice';
import { useAppSelector } from '../../hooks/reduxHook';
import { getQuizByCategory } from '../../utils/getQuizByCategory';
import { useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import constants from '../../constants/common.json';

import styles from './PlayPage.module.scss';
import { QuizCarousel } from '../../components/QuizCarousel/QuizCarousel';

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

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>{constants.PLAY}</h1>
      <div>
        <QuizCarousel quizzes={filteredQuizzes}></QuizCarousel>
      </div>
      <footer>
        <Button onClick={() => navigate('/')} type='exit'>
          ❌
        </Button>
      </footer>
    </div>
  );
};
