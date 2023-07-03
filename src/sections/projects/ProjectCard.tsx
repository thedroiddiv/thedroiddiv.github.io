export const ProjectCard = () => {
    return <div className="rounded-2xl border-2 border-[#252326] dark:border-white bg-white dark:bg-transparent">
        <div className="flex flex-row gap-x-2 p-2">
            <div className="w-5 h-5 rounded-full bg-[#252326] dark:bg-white"></div>
            <div className="w-5 h-5 rounded-full bg-[#252326] dark:bg-white"></div>
            <div className="w-5 h-5 rounded-full bg-[#252326] dark:bg-white"></div>
        </div>

        <hr className="bg-white border border-[#252326] dark:border-white" />
        <div className="px-4 py-8">
            <h3 className="text-2xl font-bold">The many ways to change an SVG fill on hover</h3>
            <p className="mt-4 font-light leading-normal">How do you go about adding a colored hover effect to an icon if it's not an inline SVG? Let's dive into what's possible with CSS and SVG filters.</p>
            <div className="flex flex-row justify-between mt-6">
                <a href="" className="text-xl font-semibold">Button 1</a>
                <a href="" className="text-xl font-semibold">GitHub</a>
            </div>
        </div>
    </div>
}