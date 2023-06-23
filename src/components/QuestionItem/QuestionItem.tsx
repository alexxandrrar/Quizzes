import { FC } from 'react';
import { IQuizz } from '../../store/quizzSlice';

import styles from './QuestionItem.module.scss';

interface IQuestionItem {
  quiz: IQuizz;
  selectedAnswer: string;
  setSelectedAnswer: (value: string) => void;
  setDisabledButton: (value: boolean) => void;
}

export const QuestionItem: FC<IQuestionItem> = ({
  quiz,
  selectedAnswer,
  setSelectedAnswer,
  setDisabledButton,
}): JSX.Element => {
  const getAllAnswers = (quiz: IQuizz) => {
    const newAnswers = [...quiz.incorrect_answers, quiz.correct_answer];
    return newAnswers;
  };
  const handleAnswerSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedAnswer(event.target.value);
    setDisabledButton(false);
  };

  return (
    <div className={styles.container} key={quiz.category}>
      <div className={styles.inner}>
        <p className={styles.question}>{quiz.question}</p>
        <div className={styles.questions}>
          {getAllAnswers(quiz).map((answer) => (
            <div className={styles.checkboxWrapper}>
              <label className={styles.label} htmlFor={answer}>
                <input
                  id={answer}
                  type='checkbox'
                  name={`question_${quiz.category}`}
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={handleAnswerSelection}
                ></input>
                <span className={styles.checkmark}>✓</span>
                {answer}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
