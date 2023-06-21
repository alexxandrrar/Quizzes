import { IQuizz } from '../store/quizzSlice';

export const getRandomQuizzes = (quizzes: IQuizz[]): IQuizz[] => {
  const shuffledQuizzes = [...quizzes];
  shuffledQuizzes.sort(() => 0.5 - Math.random());
  return shuffledQuizzes.slice(0, 10);
};
