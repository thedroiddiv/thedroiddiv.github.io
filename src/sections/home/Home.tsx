import hero from '../../assets/hero.svg';

export const Home = () => {

    return (
        <section className="py-32 md:py-0 md:min-h-screen flex flex-row justify-center">
            <img className='hidden md:block w-1/3 lg:translate-x-48 md:translate-x-28' src={hero} alt="" />
            <div className="m px-16 md:px-32 lg:px-48 md:py-32 md:flex md:flex-col md:justify-center md:min-h-screen md:w-2/3  md:bg-[#8BDAC0] md:dark:bg-[#6B375D]" >
                <h1 className="text-xl md:text-2xl font-pacifico mb-4 -rotate-6">👋 Hi, I'm Divyansh</h1>
                <p className="text-4xl md:text-6xl mt-12 font-bold">
                    I like making <span className='stroke dark:stroke_black'>fun</span>, interactive things with code. 
                    I also <span className=''>talk</span> & write about those things.
                </p>
            </div>
        </section >
    )
}