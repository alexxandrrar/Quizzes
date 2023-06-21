import { FC } from 'react';
import styles from './QuizzItem.module.scss';
import { Button } from '../Button/Button';

interface IQuizzItemProps {
  name: string;
  questions: number;
}

export const QuizzItem: FC<IQuizzItemProps> = ({
  name,
  questions,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <img
        src='https://media.istockphoto.com/id/1322543728/vector/quiz-text-speech-symbols-concept.jpg?s=612x612&w=0&k=20&c=a_DFKrhiKJEE_im9F7dJqn0CmADBOqupKe_990F7WvQ='
        alt='quizz'
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.text}>{`Number of questions: ${questions}`}</p>
      <Button type='simple'>Start quizz</Button>
    </div>
  );
};
