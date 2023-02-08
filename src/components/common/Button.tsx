type Props = {
  children: any;
  className?: string;
  onClick?: any;
  inline?: boolean;
};

const Button = (props: Props) => (
  <button
    onClick={props.onClick}
    className={`
      rounded-full px-10 py-4 font-bold text-white transition duration-200
      ${props.inline
        ? `border-2 border-cyan-500 text-cyan-500 hover:border-cyan-700 hover:text-cyan-700`
        : `bg-cyan-500 hover:bg-cyan-700`}
      ${props.className}
    `}
  >
    {props.children}
  </button>
);

export default Button;
