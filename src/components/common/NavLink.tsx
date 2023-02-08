import { Link } from 'react-router-dom';

type Props = {
  to: string;
  children: any;
  className?: any;
  noBorder?: boolean;
};

const NavLink = (props: Props) => (
  <Link
    className={`
      m-10 border-dashed border-b-2 border-transparent text-xl transition-all duration-300
      ${props.noBorder ? 'hover:border-transparent' : 'hover:border-b-black'}
      ${props.className}
    `}
    to={props.to}
  >
    {props.children}
  </Link>
);

export default NavLink;
