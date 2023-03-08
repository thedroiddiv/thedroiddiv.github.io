import { ReactNode } from 'react';
import {
  FaGit,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

interface Props {
  className?: string;
  type:
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'twitter'
    | 'medium'
    | 'text'
    | 'none';
  href: string;
  children?: string;

  size ?: number
}

export const MyLink = ({ className, type, href, children, size }: Props) => {
  const Anchor = ({ children }: { children: ReactNode }) => {
    return (
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className={`${className} flex gap-2 items-center transition-all hover:text-amber-500 hover:-translate-y-0.5`}
      >
        {children}
      </a>
    );
  };

  switch (type) {
    case 'instagram':
      return (
        <Anchor>
          {' '}
          {children} <FaInstagram size={size}/>{' '}
        </Anchor>
      );
    case 'linkedin':
      return (
        <Anchor>
          {' '}
          {children} <FaLinkedin size={size}/>{' '}
        </Anchor>
      );
    case 'github':
      return (
        <Anchor>
          {' '}
          {children} <FaGithub size={size}/>{' '}
        </Anchor>
      );
    case 'text':
      return (
        <Anchor>
          {' '}
          {children} <FaLink size={size}/>{' '}
        </Anchor>
      );
    case 'twitter':
      return (
        <Anchor>
          {' '}
          {children} <FaTwitter size={size}/>{' '}
        </Anchor>
      );
    case 'medium':
      return (
        <Anchor>
          {' '}
          {children} <BsMedium size={size}/>{' '}
        </Anchor>
      );
    case 'none':
      return <Anchor> {children} </Anchor>;
  }
};
