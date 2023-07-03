import { SocialHandles } from './SocialHandles';

export const Footer = () => {
    return <section id='footer' className={'p-8 md:py-32 md:px-48 bg-[#8BDAC0]  dark:bg-[#252326] '}>


        <div className={'bg-[#A990D6] dark:bg-[#6B375D] p-8 rounded-3xl text-center border-2 border-black dark:border-white'}>
            <p className={'text-4xl '}>Designed and Developed By:</p>
            <p className={'text-2xl font-extralight mt-4'}>Divyansh Kushwaha</p>
            <p className={''}>divyanshdxn@gmail.com</p>
            <p className={'f'}>+91-8354931770</p>
            <SocialHandles className={'mt-12'} />
        </div>



    </section>;
};