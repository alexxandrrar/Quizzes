import { HomePage } from '../pages/HomePage/HomePage';
import React from 'react';

export enum EPath {
  HOME_PAGE = '/',
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
];
