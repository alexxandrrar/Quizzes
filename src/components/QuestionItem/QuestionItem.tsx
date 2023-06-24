import { FC } from 'react';
import { IQuizz } from '../../store/quizzSlice';

import styles from './QuestionItem.module.scss';

interface IQuestionItem {
  quiz: IQuizz;
  selectedAnswer: string;
  setSelectedAnswer: (value: string) => void;
  setDisabledButton: (value: boolean) => void;
  ariaLabel?: string;
  tabIndex?: number;
}

export const QuestionItem: FC<IQuestionItem> = ({
  quiz,
  selectedAnswer,
  setSelectedAnswer,
  setDisabledButton,
  ariaLabel,
  tabIndex,
}): JSX.Element => {
  const handleAnswerSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedAnswer(event.target.value);
    setDisabledButton(false);
  };

  const shuffledAnswers = [
    ...quiz.incorrect_answers,
    quiz.correct_answer,
  ].sort();

  return (
    <div className={styles.container} key={quiz.category}>
      <div className={styles.inner} aria-label={ariaLabel} tabIndex={tabIndex}>
        <p className={styles.question}>{quiz.question}</p>
        <div className={styles.questions}>
          {shuffledAnswers.map((answer, index) => (
            <div key={index} className={styles.checkboxWrapper}>
              <label className={styles.label} htmlFor={answer}>
                <input
                  id={answer}
                  type='checkbox'
                  name={`question_${quiz.category}`}
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={handleAnswerSelection}
                  aria-label={answer}
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
