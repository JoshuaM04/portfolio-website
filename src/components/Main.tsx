import { useState, useEffect } from 'react';

interface projectInformationInterface {
    projectNames: Array<string>;
    projectDescriptions: Array<string>;
    projectSource: Array<string>;
    projectWebsite: Array<string>;
}

interface functionProps {
    skillSection: Array<string>;
    skillIcons: React.JSX.Element[];
    projectInformation: projectInformationInterface;
    backgroundImage: Array<string>;
    index: number;
}

function MobileMain({skillSection, skillIcons, projectInformation, backgroundImage, index}: functionProps) {
    return (
        <section className="flex flex-col gap-20 w-full lg:hidden lg:aria-hidden">
            <div className="flex flex-col gap-10">
                <h1 className="text-primary text-2xl font-semibold">Core Competencies</h1>
                <div className="skills-container grid grid-rows-3 grid-cols-2 gap-5">
                    {
                        skillSection.map((item, index) => (
                            <div className="flex flex-col justify-around items-center text-gray-400 border border-gray-600 rounded-md h-[30vw] text-center p-2" key={index}>
                                {skillIcons[index]}
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <hr className="border-solid border-gray-900" />

            <div className="flex flex-col gap-10">
                <h2 className="text-primary text-2xl font-semibold">Featured Build</h2>
                
                <div className="flex flex-col gap-10 border rounded-md border-gray-600 min-h-125 p-5">
                    <div className={`img-container min-h-[35vw] bg-[url(../../images/imageStrip.png)] ${backgroundImage[index]} bg-size-[600%_auto] bg-no-repeat rounded-t-md -m-5`}>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-primary text-xl font-semibold">
                            <a href={projectInformation.projectWebsite[index]}>{projectInformation.projectNames[index]}</a>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {projectInformation.projectDescriptions[index]}
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <div className="React-Skill rounded-full min-w-20 bg-primary-skill border border-cyan-500 text-center pt-1 pb-1 pl-4 pr-4 text-primary font-medium text-sm">React</div>
                        <div className="React-Skill rounded-full min-w-20 bg-primary-skill border border-cyan-500 text-center pt-1 pb-1 pl-4 pr-4 text-primary font-medium text-sm">Tailwind CSS</div>
                    </div>

                    <div className="flex">
                        <p>
                            <a className="text-primary font-semibold text-lg" href={projectInformation.projectSource[index]}>View Source ➜</a>
                        </p>
                    </div>
                </div>
            </div>

            <hr className="border-solid border-gray-900" />
        </section>
    )
}

/* function DesktopMain({skillSection, skillIcons, projectInformation, index}: functionProps) {
    return (
        <section className="max-lg:hidden max-lg:aria-hidden">

        </section>
    )
} */

export default function Main() {
    const skillSection = ["React", "State Management", "TypeScript", "CSS Architecture", "Tailwind CSS", "Responsive Design"];
    const backgroundImage = ["bg-position-[center_left_-0%]", "bg-position-[center_left_20%]", "bg-position-[center_left_40%]", "bg-position-[center_left_60%]", "bg-position-[center_left_80%]", "bg-position-[center_left_100%"];
    const skillIcons = [<svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M19.108 12.376q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659c.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094a1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7a20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a18.7 18.7 0 0 1 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97a20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665a19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333a1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01a20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324a19.267 19.267 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972c-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688a20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188a18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682a19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238a1.766 1.766 0 0 1 .054 1.403Zm-8.819-6.141a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654Z"/></svg>,
                        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1025 1024"><path d="M512.59 1024q-139 0-257-17T69.094 960.5T.59 896V768q0-8 6-19q62 37 202.5 60t303.5 23t303.5-23t202.5-60q6 11 6 19v128q0 35-68.5 64.5t-186.5 46.5t-257 17zm0-256q-139 0-257-17T69.094 704.5T.59 640V512q0-8 6-19q62 37 202.5 60t303.5 23t303.5-23t202.5-60q6 11 6 19v128q0 35-68.5 64.5T769.59 751t-257 17zm0-256q-139 0-257-17T69.094 448.5T.59 384V256q0-8 6-19q62 37 202.5 60t303.5 23t303.5-23t202.5-60q6 11 6 19v128q0 35-68.5 64.5T769.59 495t-257 17zm0-256q-139 0-257-17T69.094 192.5T.59 128t68.5-64.5T255.59 17t257-17t257 17t186.5 46.5t68.5 64.5t-68.5 64.5t-186.5 46.5t-257 17z"/></svg>,
                        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M19.131 3H4.869c-.955 0-1.73.787-1.73 1.758v14.484c0 .97.775 1.758 1.73 1.758h14.262c.956 0 1.73-.787 1.73-1.758V4.758c0-.97-.774-1.758-1.73-1.758m-5.712 9.984h-2.215v6.434H9.439v-6.434H7.223v-1.441h6.196zm5.712 5.277c-.139.317-.377.552-.658.739a3 3 0 0 1-.969.386a5.6 5.6 0 0 1-1.177.12a6.5 6.5 0 0 1-1.211-.11a3.7 3.7 0 0 1-1.004-.33v-1.689l-.066-.053l.066-.015v.068q.441.357.972.545c.347.133.727.2 1.108.2c.242 0 .426-.021.589-.06a1.4 1.4 0 0 0 .415-.168a.7.7 0 0 0 .246-.253a.7.7 0 0 0-.052-.738a1.3 1.3 0 0 0-.346-.335a3 3 0 0 0-.52-.295c-.207-.095-.418-.194-.657-.292c-.589-.281-1.053-.562-1.35-.95c-.301-.35-.45-.808-.45-1.335c0-.422.08-.76.242-1.055c.173-.316.377-.548.658-.738c.277-.193.588-.334.969-.422c.38-.088.762-.133 1.177-.133s.762.024 1.073.073c.311.05.602.127.865.229v1.652a2.3 2.3 0 0 0-.415-.242a3.8 3.8 0 0 0-.97-.275a3 3 0 0 0-.45-.033a2.4 2.4 0 0 0-.553.057a1.3 1.3 0 0 0-.416.161a.8.8 0 0 0-.26.25a.6.6 0 0 0-.093.327q0 .194.104.351q.103.152.295.296c.114.091.27.183.45.274c.207.091.394.183.623.278c.311.133.588.281.83.422c.243.14.447.305.623.492c.187.175.322.387.416.633s.142.523.142.843c0 .457-.108.809-.246 1.125"/></svg>,
                        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path d="m5.6 11.6l-1.2-1.2c-.8-.2-2-.1-2.7 1c-.8 1.1-.3 2.8-1.7 4.6c0 0 3.5 0 4.8-1.3c1.2-1.2 1.2-2.2 1-3l-.2-.1zm.2-3.5c-.2.3-.5.7-.7 1c0 .2-.1.3-.2.4L6.4 11c.1-.1.3-.2.4-.3c.3-.2.7-.4 1-.7c.4 0 .6-.2.8-.4L6.4 7.4c-.2.2-.4.4-.6.7zm10-7.9c-.3-.3-.7-.3-1-.1c0 0-3 2.5-5.9 5.1c-.4.4-.7.7-1.1 1c-.2.2-.4.4-.6.5l2.1 2.1c.2-.2.4-.4.5-.7c.3-.4.6-.7.9-1.1c2.5-3 5.1-5.9 5.1-5.9c.3-.2.3-.6 0-.9z"/></svg>,
                        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51z"/></svg>,
                        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 384"><path d="M85 64v235h214v64H0v-64h43V64q0-18 12.5-30.5T85 21h384v43H85zm406 43q8 0 14.5 6t6.5 15v213q0 9-6.5 15.5T491 363H363q-9 0-15.5-6.5T341 341V128q0-9 6.5-15t15.5-6h128zm-22 192V149h-85v150h85z"/></svg>
    ];
    const projectInformation = {
        projectNames: ["LoopStudios Landing Page", "Tip Calculator App", "Contact Form", "Time Tracking Dashboard", "News Homepage", "NFT Preview Card Component"],
        projectDescriptions: [
            `An animation-driven landing page that showcases VR technology. Crafted with React to organize contents of the page into functional components, Tailwind CSS to enhance type-writer effects via the theme directive, and TypeScript
            for static typing.`,
            `A web application powered by React that uses useState() React hooks to store any active states (e.g. the tip button option that is selected). Furthermore, it utilizes a modular approach to organizing the parts of the webpage into different
            functional components.`,
            `A interative contact form using custom-built regex classifications for user input. This customized approach allows dynamic styling for error states pertaining to input fields. Furthermore, the application is powered by React.`,
            `A multi-component web application that features a responsive design, allowing the components to be organized differently within a grid. The information showcased is dynamically rendered to the webpage via user input when selecting
            an option such as 'Daily', 'Weekly', or 'Monthly' which is fetched from an external data.json file.`,
            `A React powered application that showcases sections tailored to different types of media. The application applies a unique navigation menu on mobile resolutions which uses a modal pop-up which is activated via user-input and a navigation list on
            desktop resolutions.`,
            `A simple yet illustrative approach to creating interactive content via hover states in React. Utilizes utility classes such as 'hover:mix-blend-screen for the child container and 'hover:bg-cyan-500' to create a color hue or filter over an image.`
        ],
        projectSource: ["https://github.com/JoshuaM04/LoopStudios-Landing-Page", "https://github.com/JoshuaM04/Tip-Calculator-App", "https://github.com/JoshuaM04/Contact-Form", "https://github.com/JoshuaM04/Time-Tracking-Dashboard",
                        "https://github.com/JoshuaM04/News-Homepage", "https://github.com/JoshuaM04/NFT-Preview-Card-Component"
        ],
        projectWebsite: ["https://loop-studios-landing-page-kohl.vercel.app/", "https://tip-calculator-app-brown-three.vercel.app/", "https://contact-form-eosin-psi.vercel.app/", "https://time-tracking-dashboard-zeta-plum.vercel.app/", 
                         "https://news-homepage-seven-sooty.vercel.app/", "https://nft-preview-card-component-delta-ten.vercel.app/"
        ]
    }
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(prevIndex => {
                if (prevIndex === 5) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 3000)

        return () => clearInterval(id);
    }, []);

    return (
        <main>
            <MobileMain 
                skillSection={skillSection}
                skillIcons={skillIcons}
                projectInformation={projectInformation}
                backgroundImage={backgroundImage}
                index={index}
            />
        </main>
    )
}