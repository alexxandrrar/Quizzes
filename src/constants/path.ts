import { HomePage } from '../pages/HomePage/HomePage';
import { PlayPage } from '../pages/PlayPage/PlayPage';
import React from 'react';

export enum EPath {
  HOME_PAGE = '/',
  PLAY_PAGE = '/play',
}

type TPath = {
  path: string;
  element: () => React.ReactElement;
};

export const routes: TPath[] = [
  {
    path: EPath.HOME_PAGE,
    element: HomePage,
  },
  {
    path: EPath.PLAY_PAGE,
    element: PlayPage,
  },
];
