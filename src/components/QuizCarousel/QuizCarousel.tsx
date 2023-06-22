import { FC, useState } from 'react';
import Slider from 'react-slick';
import { IQuizz } from '../../store/quizzSlice';
import { QuestionItem } from '../QuestionItem/QuestionItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './QuizCarousel.scss';
import { Button } from '../Button/Button';

interface IQuizCarousel {
  quizzes: IQuizz[];
}
export const QuizCarousel: FC<IQuizCarousel> = ({ quizzes }): JSX.Element => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  return (
    <div className={'carousel-container'}>
      <Slider {...settings}>
        {quizzes.map((quiz) => (
          <QuestionItem
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            quiz={quiz}
          />
        ))}
      </Slider>
    </div>
  );
};
