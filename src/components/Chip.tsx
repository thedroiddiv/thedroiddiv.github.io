import { ReactNode } from 'react';

type Props = {
  text: string;
  children?: ReactNode;
  className?: string;
  onClick?: (e: any) => void;
  href?: string;
};

const Chip = ({ text, children, className, onClick, href }: Props) => {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      <button
        onClick={(e) => onClick && onClick(e)}
        className={`${className} px-4 py-2 border border-green-600 rounded-full dark:hover:bg-green-600 hover:bg-green-400 transition`}
      >
        {text}
        {children}
      </button>
    </a>
  );
};

export default Chip;
