import { MyLink } from './MyLinks';

interface HandlesProps {
  className?: string;
}
export const SocialHandles = ({ className }: HandlesProps) => {
  return (
    <ul
      className={` ${
        className ? className : ''
      } flex flex-row gap-4 justify-center `}
    >
      <MyLink
        type={'instagram'}
        href={'https://www.instagram.com/thedroiddiv/'}
        size={32}
      />
      <MyLink
        type={'twitter'}
        href={'https://www.twitter.com/thedroiddiv/'}
        size={32}
      />
      <MyLink
        type={'linkedin'}
        href={'https://www.linkedin.com/in/thedroiddiv/'}
        size={32}
      />
      <MyLink
        type={'github'}
        href={'https://www.github.com/thedroiddiv/'}
        size={32}
      />
      <MyLink
        type={'medium'}
        href={'https://www.medium.com/@thedroiddiv/'}
        size={32}
      />
    </ul>
  );
};
