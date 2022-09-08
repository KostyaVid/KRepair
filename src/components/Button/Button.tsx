import cn from 'classnames';
import s from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: 'red' | 'fill' | 'clear' | 'price';
  onClick?: () => void;
}

const Button = ({ children, className, onClick, type = 'button', color = 'red' }: IButtonProps) => {
  const styleButton = cn(s.button, className, s[color]);
  return (
    <button type={type} className={styleButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
