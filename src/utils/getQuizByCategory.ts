import { IQuizz } from '../store/quizzSlice';

export const getQuizByCategory = (
  quizzes: IQuizz[],
  category: string
): IQuizz[] => quizzes.filter((quiz) => quiz.category === category);
