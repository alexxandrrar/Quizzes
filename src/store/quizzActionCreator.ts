import axios from 'axios';
import { URL } from '../constants/api';
import {
  quizzFetching,
  quizzFetchingError,
  quizzFetchingSuccess,
} from './quizzSlice';
import { AppDispatch } from './store';

export const fetchQuizzes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(quizzFetching());
    const { data } = await axios.get(`${URL}`);
    dispatch(quizzFetchingSuccess(data.results));
  } catch (error) {
    dispatch(quizzFetchingError((error as Error).message));
  }
};
