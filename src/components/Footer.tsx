function MobileFooter() {
    return (
        <section className="flex flex-col gap-20 lg:hidden lg:aria-hidden">
            <div className="text-center">
                <h2 className="text-2xl uppercase text-primary font-bold">Architect</h2>
            </div>

            <div className="flex justify-center items-center gap-20">
                <a className="text-primary" href="https://github.com/JoshuaM04">
                    <svg className="stroke-primary fill-white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 432 416"><path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/></svg>
                </a>
                <a className="text-primary" href="https://www.linkedin.com/in/joshua-martinez-1aa853212/">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1025 1024"><path d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5zm-640-864q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V352zm640 160q0-80-56-136t-136-56q-44 0-96.5 14t-95.5 39v-21q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V576q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V512z"/></svg>
                </a>
                <a className="text-primary" href="https://www.frontendmentor.io/profile/JoshuaM04">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M12.17 1.272a.732.732 0 0 0-.718.732v13.914a.732.732 0 0 0 .732.732a.732.732 0 0 0 .732-.732V2.004a.732.732 0 0 0-.745-.732zM23.246 5.44a.734.734 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.813a.738.738 0 0 0 .3.065a.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966a.734.734 0 0 0-.69-.433zm-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.732.732 0 0 0-.694-.547z"/></svg>
                </a>
            </div>

            <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
                <div className="flex gap-2 items-center">
                    <svg className="stroke-gray-500" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" strokeWidth="1.5"/>
                        <path d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <p>2026 Architect In The Shadows.</p>
                </div>

                <p>Built with precision.</p>
            </div>
        </section>
    )
}

function DesktopFooter() {
    return (
        <section className="flex justify-between gap-20 max-lg:hidden max-lg:aria-hidden">
            <div className="text-center">
                <h2 className="text-xl uppercase text-primary font-bold">Architect</h2>
            </div>

            <div className="flex items-center gap-2 text-sm">
                <svg className="stroke-gray-500" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" strokeWidth="1.5"/>
                    <path d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-gray-600">2026 Architect In The Shadows. Built with precision.</p>
            </div>

            <div className="flex justify-center items-center gap-10 text-gray-600 text-sm">
                <a className="hover:text-primary" href="https://github.com/JoshuaM04">
                    GitHub
                </a>
                <a className="hover:text-primary" href="https://www.linkedin.com/in/joshua-martinez-1aa853212/">
                    Linkedln
                </a>
                <a className="hover:text-primary" href="https://www.frontendmentor.io/profile/JoshuaM04">
                    Frontend Mentor
                </a>
            </div>
        </section>
    )
}

export default function Footer() {
    return (
        <footer className="w-full">
            <MobileFooter />
            <DesktopFooter />
        </footer>
    )
}