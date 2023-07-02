import hero from '../../assets/hero.svg';

export const Home = () => {

    return (
        <section className="min-h-screen">
            <div className="hidden md:block z-0 top-0 right-0 absolute bg-[#8BDAC0] dark:bg-[#6B375D] w-2/3 h-full" />

            <div className="min-h-screen relative flex z-10">
                <img className='hidden md:block w-1/2' src={hero} alt="" />
                <div className="min-h-screen justify-center md:w-1/2 flex flex-col" >
                    <h1 className="text-xl md:text-2xl font-pacifico mb-4 -rotate-6">👋 Hi, I'm Divyansh</h1>
                    <p className="text-4xl md:text-6xl mt-12 font-bold">
                        I like making <span className='stroke'>fun</span>, interactive things with code. I also talk & write about those things.
                    </p>
                </div>
            </div>
        </section>
    )
}