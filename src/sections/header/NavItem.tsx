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
      className="rounded-lg px-4 py-2 cursor-pointer transition-all hover:decoration-wavy hover:underline underline-offset-8 text-2xl"
    >
      {children}
    </Link>
  );
};
