import { FC, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { IQuizz } from '../../store/quizzSlice';
import { QuestionItem } from '../QuestionItem/QuestionItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './QuizCarousel.scss';
import { Button } from '../Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAnswers } from '../../utils/checkAnswers';

interface IQuizCarousel {
  quizzes: IQuizz[];
  startTime: number;
}
export const QuizCarousel: FC<IQuizCarousel> = ({
  quizzes,
  startTime,
}): JSX.Element => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [selectedAnswersArray, setSelectedAnswerArray] = useState<string[]>([]);

  const slider = React.useRef(null);

  useEffect(() => {
    if (selectedAnswersArray.length === quizzes.length) {
      const correctAnswers = quizzes.map((quiz) => quiz.correct_answer);
      const results = checkAnswers(correctAnswers, selectedAnswersArray);
      const elapsedTime = Date.now() - startTime;
      navigate(
        `/finish?results=${encodeURIComponent(
          JSON.stringify(results)
        )}&elapsed=${elapsedTime}`
      );
    }
  });

  const onClickButtonHandler = () => {
    setSelectedAnswerArray([...selectedAnswersArray, selectedAnswer]);
    /* @ts-ignore */
    slider?.current?.slickNext();
    setSelectedAnswer('');
    setDisabledButton(true);
  };

  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
  };

  return (
    <div className={'carousel-container'}>
      <Slider ref={slider} {...settings}>
        {quizzes.map((quiz, index) => (
          <div key={index}>
            <h3>{`${index + 1}/${quizzes.length}`}</h3>
            <QuestionItem
              tabIndex={0}
              ariaLabel={quiz.question}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              setDisabledButton={setDisabledButton}
              quiz={quiz}
            />
          </div>
        ))}
      </Slider>
      <Button
        tabIndex={0}
        ariaLabel={'go to the next question'}
        className={'disabled-button'}
        disabled={disabledButton}
        type='gradient'
        onClick={onClickButtonHandler}
      >
        {selectedAnswersArray.length !== quizzes.length - 1 ? '🢂' : 'Finish'}
      </Button>
    </div>
  );
};
