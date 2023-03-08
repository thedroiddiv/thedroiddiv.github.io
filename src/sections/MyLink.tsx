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
}

export const MyLink = ({ className, type, href, children }: Props) => {
  const Anchor = ({ children }: { children: ReactNode }) => {
    return (
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className={`${className} flex gap-2 items-center transition-all hover:text-green-400 hover:-translate-y-0.5`}
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
          {children} <FaInstagram />{' '}
        </Anchor>
      );
    case 'linkedin':
      return (
        <Anchor>
          {' '}
          {children} <FaLinkedin />{' '}
        </Anchor>
      );
    case 'github':
      return (
        <Anchor>
          {' '}
          {children} <FaGithub />{' '}
        </Anchor>
      );
    case 'text':
      return (
        <Anchor>
          {' '}
          {children} <FaLink />{' '}
        </Anchor>
      );
    case 'twitter':
      return (
        <Anchor>
          {' '}
          {children} <FaTwitter />{' '}
        </Anchor>
      );
    case 'medium':
      return (
        <Anchor>
          {' '}
          {children} <BsMedium />{' '}
        </Anchor>
      );
    case 'none':
      return <Anchor> {children} </Anchor>;
  }
};
