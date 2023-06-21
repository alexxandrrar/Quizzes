import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { QuizItem } from '../../components/QuizItem/QuizItem';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { fetchQuizzes } from '../../store/quizzActionCreator';
import { getRandomQuizzes } from '../../utils/getRandomQuizzes';
import { Loader } from '../../components/Loader/Loader';
import { getQuizByCategory } from '../../utils/getQuizByCategory';
import constants from '../../constants/common.json';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { quizzes, isLoaded, error } = useAppSelector(
    (state) => state.quizzReducer
  );

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const handleRandomButtonClick = () => {
    getRandomQuizzes(quizzes);
    navigate('/play');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>{constants.QUIZZES}</h1>
        <div className={styles.buttonContainer}>
          <Button type='gradient' onClick={handleRandomButtonClick}>
            I'm lucky
          </Button>
        </div>
      </header>
      {isLoaded ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.quizzes}>
          {quizzes &&
            quizzes.map(({ category }) => (
              <QuizItem
                name={category}
                questions={getQuizByCategory(quizzes, category).length}
                category={category}
              ></QuizItem>
            ))}
        </div>
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
};
