import { IQuizz } from '../store/quizzSlice';

export const getRandomQuiz = (quizzes: IQuizz[]): string => {
  const categories = Array.from(new Set(quizzes.map((quiz) => quiz.category)));
  const randomIndex = Math.floor(Math.random() * categories.length);
  const randomCategory = categories[randomIndex];

  return randomCategory;
};
