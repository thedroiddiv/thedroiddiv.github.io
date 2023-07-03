export const ExperienceCard = () => {
    return <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 ">
        <p className="md:w-1/5 font-pacifico -rotate-6">01. At Karya</p>
        {/* <div className="w-32 md:w-1/5 bg-[#252326] border-0">
            <hr />
        </div> */}
        <div className="md:w-4/5">
            <h2 className="text-3xl font-bold">I am currently working as an SDE at Karya Inc</h2>
            <p className="mt-8 font-light leading-normal">
                Animation is one of the best ways to bring brand personality and character to an online experience, but in the busy world of front-end development, it can often be overlooked.
                <br />
                <br />
                In this workshop we cover everything you need to know to get started with, and master SVG animation. We'll cover the basics of SVG syntax, how to animate SVGs with CSS, and how to
            </p>
        </div>
    </div>
}