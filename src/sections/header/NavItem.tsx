import { Link } from 'react-scroll';

interface Props {
  to: string;
  children?: React.ReactNode;
}

export const NavItem: React.FC<Props> = ({ to, children }) => {
  return (
    <Link
      to={to}
      smooth={true}
      className="rounded-lg px-4 py-2 cursor-pointer transition-all hover:text-green-700 hover:dark:text-amber-500 hover:-translate-y-0.5 underline-offset-8 text-2xl"
    >
      {children}
    </Link>
  );
};
