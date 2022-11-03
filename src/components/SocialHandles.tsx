import { ReactNode } from 'react';
import {
  //FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

type Props = {
  href: string;
  children: ReactNode;
};
const SocialLink = ({ href, children }: Props) => (
  <a
    href={href}
    rel="noreferrer"
    target="_blank"
    className="hover:text-green-600 transition "
  >
    {children}
  </a>
);

export const SocialHandles = () => (
  <div className="flex gap-4 flex-wrap">
    <SocialLink href="https://www.instagram.com/divyanshdxn/">
      <FaInstagram size={24} />
    </SocialLink>
    <SocialLink href="https://www.twitter.com/divyanshdxn/">
      <FaTwitter size={24} />
    </SocialLink>
    { /** <SocialLink href="https://www.github.com/divyanshdxn//">
      <FaDiscord size={24} />
    </SocialLink> */ }
    <SocialLink href="https://www.linkedin.com/in/divyanshdxn/">
      <FaLinkedin size={24} />
    </SocialLink>
    <SocialLink href="https://www.github.com/divyanshdxn/">
      <FaGithub size={24} />
    </SocialLink>
  </div>
);
