import { MyLink } from './MyLink';
import React from 'react';

export {};

export const Footer = () => {
  return <section id='footer' className={'p-16 flex flex-col md:flex-row md:p-32 opacity-75 justify-between'}>

    <div className={''}>
      <p className={'text-4xl font-thin'}>Designed and Developed By:</p>
      <p className={'text-2xl font-extralight mt-4'}>Divyansh Kushwaha</p>
      <p className={'font-light'}>divyanshdxn@gmail.com</p>
      <p className={'font-light'}>+91-8354931770</p>
      <SocialHandles className={'mt-12'}/>
    </div>

    <img className={'w-96 hidden md:block'} src={'assets/programmer_footer.svg'}/>

  </section>;
};

interface HandlesProps {
  className?: string;
}

export const SocialHandles = ({ className }: HandlesProps) => {
  return (
    <ul className={` ${className ? className : ''} flex flex-row gap-4 `}>

      <MyLink
        type={'instagram'}
        href={'https://www.instagram.com/divyanshdxn/'}
        size={32}
      />
      <MyLink type={'twitter'} href={'https://www.twitter.com/divyanshdxn/'}  size={32}/>
      <MyLink
        type={'linkedin'}
        href={'https://www.linkedin.com/in/divyanshdxn/'} size={32}
      />
      <MyLink type={'github'} href={'https://www.github.com/divyanshdxn/'}  size={32}/>
      <MyLink type={'medium'} href={'https://www.medium.com/@divyanshdxn/'} size={32} />
    </ul>
  );
};