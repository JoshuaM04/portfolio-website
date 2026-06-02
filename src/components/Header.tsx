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
                    <a className="bg-primary rounded-sm pl-5 pr-5 pt-2 pb-2 text-gray-700 font-medium shadow-md shadow-primary/50" href="">View Resume</a>
                    <a className="border border-primary rounded-sm pl-5 pr-5 pt-2 pb-2 text-primary font-medium" href="mailto:johndoe@example.com">Contact</a>
                </div>
            </div>

            <hr className="border-solid border-gray-900" />
        </section>
    )
}

function DesktopHeader() {
    return (
        <section className="max-lg: hidden max-lg:aria-hidden">

        </section>
    )
}

export default function Header() {
    return (
        <header>
            <MobileHeader />
            <DesktopHeader />
        </header>
    )
}