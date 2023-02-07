type Props = {
  className?: string;
  children: any;
  onClick?: any;
  inline?: boolean;
};

const Button = (props: Props) => (
  <button
    onClick={props.onClick}
    className={`
      rounded-full px-10 py-4 font-bold text-white transition duration-200
      hover:bg-teal-900
      ${props.inline ? `border-2 border-teal-700 text-teal-700` : `bg-teal-700`}
      ${props.className}
    `}
  >
    {props.children}
  </button>
);

export default Button;
