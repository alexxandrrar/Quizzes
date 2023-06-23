import { FC, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { IQuizz } from '../../store/quizzSlice';
import { QuestionItem } from '../QuestionItem/QuestionItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './QuizCarousel.scss';
import { Button } from '../Button/Button';
import React from 'react';

interface IQuizCarousel {
  quizzes: IQuizz[];
}
export const QuizCarousel: FC<IQuizCarousel> = ({ quizzes }): JSX.Element => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  const slider = React.useRef(null);

  const onClickButtonHandler = () => {
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
              key={quiz.category}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              setDisabledButton={setDisabledButton}
              quiz={quiz}
            />
          </div>
        ))}
      </Slider>
      <Button
        className={'disabled-button'}
        disabled={disabledButton}
        type='gradient'
        onClick={onClickButtonHandler}
      >
        🢂
      </Button>
    </div>
  );
};
