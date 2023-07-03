import hero from '../../assets/hero.svg';
import android from '../../assets/android.svg';
import kotlin from '../../assets/kotlin.svg';

export const Home = () => {
    return (
        <section className="md:py-0 min-h-screen flex flex-col md:flex-row justify-center">
            <img className='md:block w-1/2 md:w-1/3 translate-x-48' src={hero} alt="" />
            <div className="px-8 md:px-32 lg:px-48 md:py-32 md:flex md:flex-col md:justify-center md:min-h-screen md:w-2/3  md:bg-[#8BDAC0] md:dark:bg-[#6B375D]" >
                <h1 className="text-xl md:text-2xl font-pacifico mb-4 md:-rotate-6">👋 Hi, I'm Divyansh</h1>
                <p className="text-4xl md:text-6xl mt-12 font-bold">
                    I like making <span className='stroke dark:stroke_black'>
                        <img className='h-8 md:h-12 -translate-y-1 inline hover:scale-150 transition-all' src={kotlin} />
                        fun</span>, interactive things  {" "}
                    <img className='h-8 md:h-12 inline -translate-y-1 hover:scale-150 transition-all' src={android} />
                    {" "} with code
                </p>
                <div className='flex flex-row mt-4 gap-3'>
                    <a href="" className='px-4 py-2 bg-[#A990D6] dark:bg-green-600 border-2 rounded-xl border-[#252326] dark:border-white'>Resume</a>
                    <a href="" className='px-4 py-2 bg-[#FDF8BB] dark:bg-[#252326] border-2 rounded-xl border-[#252326] dark:border-white'>GitHub</a>
                </div>
            </div>
        </section >
    )
}