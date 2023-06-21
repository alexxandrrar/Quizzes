import { FC } from 'react';
import classNames from 'classnames';

import './Loader.scss';

export interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = ({ className }): JSX.Element => {
  return <div className={classNames(className, 'loader')}></div>;
};
