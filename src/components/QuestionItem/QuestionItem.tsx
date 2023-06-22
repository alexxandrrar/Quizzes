import { FC, useState } from 'react';
import { IQuizz } from '../../store/quizzSlice';

import styles from './QuestionItem.module.scss';

interface IQuestionItem {
  quiz: IQuizz;
  selectedAnswer: string;
  setSelectedAnswer: (value: string) => void;
}

export const QuestionItem: FC<IQuestionItem> = ({
  quiz,
  selectedAnswer,
  setSelectedAnswer,
}): JSX.Element => {
  const getAllAnswers = (quiz: IQuizz) => {
    const newAnswers = [...quiz.incorrect_answers, quiz.correct_answer];
    return newAnswers;
  };
  const handleAnswerSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className={styles.container} key={quiz.category}>
      <div className={styles.inner}>
        <p>{quiz.question}</p>
        {getAllAnswers(quiz).map((answer) => (
          <div className={styles.questions} key={answer}>
            <input
              type='radio'
              name={`question_${quiz.category}`}
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerSelection}
            />
            <label>{answer}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
