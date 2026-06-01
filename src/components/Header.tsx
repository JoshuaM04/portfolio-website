export default function Header() {
    return (
        <section className="flex flex-col gap-20 text-white h-min w-full">
            <nav className="flex justify-between items-center">
                <p className="text-2xl uppercase text-primary font-bold">Architect</p>
                <svg className="stroke-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </nav>

            <div className="flex flex-col gap-10">
                <div className="portrait-container bg-gray-500 w-full h-60 rounded-lg">
                
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-primary font-medium">Software Engineer</p>
                    <p className="text-gray-400">Designing scalable front-end architectures with precision. Specializing in high-performance web applications and fluid user interfaces.</p>
                </div>

                <div className="flex gap-5">
                    <button className="bg-primary rounded-sm pl-5 pr-5 pt-2 pb-2 text-gray-700 font-medium shadow-md shadow-primary/50">View Work</button>
                    <button className="border border-primary rounded-sm pl-5 pr-5 pt-2 pb-2 text-primary font-medium ">Contact</button>
                </div>
            </div>

            <hr className="border-solid border-gray-900" />
        </section>
    )
}