import { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { TButtonType } from './types';
import './Button.scss';

interface IButtonProps {
  onClick?: () => void;
  type?: TButtonType;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  tabIndex?: number;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  children,
  className,
  type,
  disabled,
  ariaLabel,
  tabIndex,
}): JSX.Element => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(className, 'button', {
        [`button_type ${type}`]: type,
      })}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
};
