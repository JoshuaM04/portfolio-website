function MobileHeader() {
    return (
        <section className="flex flex-col gap-20 text-white h-min w-full lg:hidden lg:aria-hidden">
            <nav className="flex justify-between items-center">
                <div>
                    <p className="text-2xl uppercase text-primary font-bold">Architect</p>
                </div>
            </nav>

            <div className="flex flex-col gap-10">
                <div className="portrait-container bg-gray-500 w-full h-60 rounded-lg">
                
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-primary font-medium">Software Engineer</p>
                    <p className="text-gray-400">Designing scalable front-end architectures with precision. Specializing in high-performance web applications and fluid user interfaces.</p>
                </div>

                <div className="flex gap-5">
                    <a className="bg-primary rounded-sm pl-5 pr-5 pt-2 pb-2 text-gray-700 font-medium shadow-md shadow-primary/50" href="../pdf/Computer Science Resume.pdf" target="_blank">View Resume</a>
                    <a className="border border-primary rounded-sm pl-5 pr-5 pt-2 pb-2 text-primary font-medium" href="mailto:joshmartinezny08@gmail.com">Contact</a>
                </div>
            </div>

            <hr className="border-solid border-gray-900" />
        </section>
    )
}

function DesktopHeader() {
    return (
        <section className="max-lg:hidden max-lg:aria-hidden flex flex-col gap-20">
            <nav className="flex justify-between items-center gap-5 w-full">
                <p className="text-2xl uppercase text-primary font-bold">Architect</p>
                <div className="flex gap-5">
                    <p className="text-gray-500 font-bold hover:text-primary hover:border-b-2 hover:border-b-primary">Home</p>
                    <p className="text-gray-500 font-bold hover:text-primary hover:border-b-2 hover:border-b-primary">Projects</p>
                    <p className="text-gray-500 font-bold hover:text-primary hover:border-b-2 hover:border-b-primary">Skills</p>
                    <p className="text-gray-500 font-bold hover:text-primary hover:border-b-2 hover:border-b-primary">Contact</p>
                </div>
                <a className="bg-primary rounded-sm pl-5 pr-5 pt-2 pb-2 text-gray-700 font-medium shadow-md shadow-primary/50" href="../pdf/Computer Science Resume.pdf" target="_blank">Resume</a>
            </nav>

            <div className="grid grid-cols-[60%_1fr] gap-5">
                <div className="flex flex-col justify-between img-container bg-[url(../images/newsHomepage.png)] bg-contain bg-no-repeat rounded-md p-2 h-[30vw] border border-purple-300">
                    <div className="flex items-center gap-2 text-primary text-sm bg-gray-900 rounded-full pt-1 pb-1 pl-4 pr-4 w-fit">
                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M11 15H6l7-14v8h5l-7 14v-8Z"/></svg>
                        <p>Latest Build</p>
                    </div>          

                    <div className="flex gap-5">
                        <div className="React-Skill rounded-full min-w-20 bg-gray-900 border border-cyan-500 text-center pt-1 pb-1 pl-4 pr-4 text-purple-300 font-medium text-xs w-fit">HTML5</div>
                        <div className="React-Skill rounded-full min-w-20 bg-gray-900 border border-cyan-500 text-center pt-1 pb-1 pl-4 pr-4 text-purple-300 font-medium text-xs w-fit">CSS3</div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 bg-slate-900 rounded-md border border-primary p-5 h-fit">
                    <p className="text-primary text-4xl font-bold">Hello.</p>
                    <p className="text-gray-400 text-sm">
                        I engineer high-performance interfaces where precision meets aethestics. Specializing in React ecosystem and deep CSS architecture.
                    </p>

                    <div className="flex justify-between text-sm">
                        <p className="text-primary">Experience</p>
                        <p className="text-gray-400">Recent Graduate | 0 Years</p>
                    </div>

                    <hr />

                    <div className="flex justify-between text-sm">
                        <p className="text-primary">Focus</p>
                        <p className="text-gray-400">Full-Stack Architecture</p>
                    </div>

                    <hr />

                    <div className="flex justify-between text-sm">
                        <p className="text-primary">Location</p>
                        <p className="text-gray-400">San Marcos, TX</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Header() {
    return (
        <header className="lg:-mt-10 lg:p-5 lg:w-full">
            <MobileHeader />
            <DesktopHeader />
        </header>
    )
}