import { useVantaGlobe } from '../hooks/Vanta';

export const Home = () => {
  const myRef = useVantaGlobe();

  return (
    <section
      ref = {myRef}
      id='home'
      className={`h-screen bg-[url(assets/bg_sm.svg)] md:bg-[url(assets/ellipse.svg)] bg-no-repeat bg-right-bottom bg-contain px-12 md:pl-32 md:pr-0`}
    >
      <div
        className={`h-full flex flex-col md:flex-row items-center justify-center`}
      >
        <div className={`md:w-1/2 flex justify-center`}>
          <div className='flex flex-col gap-8'>
            <p className='text-xl'>👋 Hello, My name is</p>
            <div className='flex flex-col gap-4'>
              <p className='text-3xl md:text-6xl font-bold'>
                Divyansh Kushwaha
              </p>
              <p className='text-xl font-semibold'>I am an Android Developer</p>
              <p className='text-sm text-gray-400 font-light'>
                I’m an Android Developer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building an awesome platform for rural
                employment in India at Karya Inc.
              </p>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
              <a href='https://drive.google.com/drive/folders/1ttXd8lkrDxIwml6-1GdasASdkqaLgdUA?usp=sharing' target='_blank' rel='noreferrer'>
                <button className='border border-amber-500 text-amber-500 px-4 py-2'>Resume</button>
              </a>
              <a href='https://github.com/divyanshdxn/' target='_blank' rel='noreferrer'>
                <button className='border border-amber-500 bg-amber-500 text-zinc-950 px-4 py-2'>
                  Open Source
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={`md:w-1/2 flex h-0 md:h-full items-end`}>
          <img src='assets/programmer.svg' alt='' />
        </div>
      </div>
    </section>
  );
};
