import { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { TButtonType } from './types';
import './Button.scss';

interface IButtonProps {
  onClick?: () => void;
  type?: TButtonType;
  className?: string;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  children,
  className,
  type,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={classNames(className, 'button', {
        [`button_type ${type}`]: type,
      })}
    >
      {children}
    </button>
  );
};
