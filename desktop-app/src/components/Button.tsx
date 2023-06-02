import classNames from 'classnames';

type Props = {
  className?: string;
  icon?: React.ReactNode;
  label?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      className={classNames(
        'flex p-2 gap-2 border rounded items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed',
        props.className
      )}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.icon}
      {props.label && <span>{props.label}</span>}
    </button>
  );
};

export default Button;
