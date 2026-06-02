export default function Footer() {
    return (
        <section className="flex flex-col gap-10 w-full">
            <div className="text-center">
                <h2 className="text-2xl uppercase text-primary font-bold text-shadow-md text-shadow-primary/50">Architect</h2>
            </div>
            <div className="flex justify-between">
                <a className="text-primary" href="https://github.com/JoshuaM04">GitHub</a>
                <a className="text-primary" href="">LinkedIn</a>
                <a className="text-primary" href="https://www.frontendmentor.io/profile/JoshuaM04">FrontEnd Mentor</a>
            </div>
        </section>
    )
}