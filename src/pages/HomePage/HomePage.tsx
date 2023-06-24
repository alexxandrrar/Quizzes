import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHook';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
import { QuizItem } from '../../components/QuizItem/QuizItem';
import { getRandomQuiz } from '../../utils/getRandomQuiz';
import { getQuizByCategory } from '../../utils/getQuizByCategory';
import constants from '../../constants/common.json';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<string[]>([]);
  const { quizzes, isLoaded, error } = useAppSelector(
    (state) => state.quizzReducer
  );

  const handleRandomButtonClick = () => {
    const category = getRandomQuiz(quizzes);
    navigate(`/play?quizzes=${encodeURIComponent(JSON.stringify(category))}`);
  };

  useEffect(() => {
    if (quizzes) {
      const uniqueCategories = Array.from(
        new Set(quizzes.map((quiz) => quiz.category))
      );
      setCategories(uniqueCategories);
    }
  }, [quizzes]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>{constants.QUIZZES}</h1>
        <div className={styles.buttonContainer}>
          <Button
            ariaLabel={'get random quiz'}
            tabIndex={0}
            type='gradient'
            onClick={handleRandomButtonClick}
          >
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
          {categories.slice(0, 10).map((category) => (
            <QuizItem
              key={category}
              name={category}
              questions={getQuizByCategory(quizzes, category).length}
              category={category}
              onClick={() =>
                navigate(
                  `/play?quizzes=${encodeURIComponent(
                    JSON.stringify(category)
                  )}`
                )
              }
            />
          ))}
        </div>
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
};
