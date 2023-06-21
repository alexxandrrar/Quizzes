import { useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { QuizzItem } from '../../components/QuizzItem/QuizzItem';
import constants from '../../constants/common.json';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { fetchQuizzes } from '../../store/quizzActionCreator';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { quizzes, isLoaded, error } = useAppSelector(
    (state) => state.quizzReducer
  );
  useEffect(() => {
    dispatch(fetchQuizzes());
    console.log(quizzes);
  }, []);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>{constants.QUIZZES}</h1>
        <div className={styles.buttonContainer}>
          <Button type='gradient' onClick={() => console.log('RANDOM QUIZZ')}>
            I'm lucky
          </Button>
        </div>
      </header>
      <div className={styles.quizzes}>
        <QuizzItem name={'Simple quizz'} questions={9}></QuizzItem>
        {quizzes && <p>{quizzes[1].question}</p>}
      </div>
    </div>
  );
};
