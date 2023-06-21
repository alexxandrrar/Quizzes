import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IQuizz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizzState {
  quizzes: IQuizz[];
  isLoaded: boolean;
  error: string;
}

const initialState: QuizzState = {
  quizzes: [],
  isLoaded: false,
  error: '',
};

export const quizzSlice = createSlice({
  name: 'quizz',
  initialState,
  reducers: {
    quizzFetching: (state) => {
      state.isLoaded = true;
    },
    quizzFetchingSuccess: (state, action: PayloadAction<IQuizz[]>) => {
      state.isLoaded = false;
      state.error = '';
      state.quizzes = action.payload;
    },
    quizzFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoaded = false;
      state.error = action.payload;
    },
  },
});

export const { quizzFetching, quizzFetchingError, quizzFetchingSuccess } =
  quizzSlice.actions;

export default quizzSlice.reducer;
