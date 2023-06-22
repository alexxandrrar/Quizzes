import { FC } from 'react';
import { Button } from '../Button/Button';

import styles from './QuizItem.module.scss';

export interface IQuizItemProps {
  name: string;
  questions?: number;
  category?: string;
  onClick: () => void;
}

export const QuizItem: FC<IQuizItemProps> = ({
  name,
  questions,
  onClick,
  category,
}): JSX.Element => {
  return (
    <div className={styles.container} key={category}>
      <img
        src='https://media.istockphoto.com/id/1322543728/vector/quiz-text-speech-symbols-concept.jpg?s=612x612&w=0&k=20&c=a_DFKrhiKJEE_im9F7dJqn0CmADBOqupKe_990F7WvQ='
        alt='quizz'
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.text}>{`Number of questions: ${questions}`}</p>
      <Button type='simple' onClick={onClick}>
        Play
      </Button>
    </div>
  );
};
