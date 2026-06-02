import { useState, useEffect } from 'react';

export default function Main() {
    const skillSection = ["React", "State Management", "TypeScript", "CSS Architecture", "Tailwind CSS", "Responsive Design"]
    const projectInformation = {
        projectImage: ["bg-[url(../images/LoopStudios.png)]", "bg-[url(../images/tipCalculator.png)]", "bg-[url(../images/contactForm.png)]", "bg-[url(../images/timeTrackingDashboard.png)]", "bg-[url(../images/newsHomepage.png)]", "bg-[url(../images/nftPreviewCardComponent.png)]"],
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
        <section className="flex flex-col gap-20 w-full">
            <div className="flex flex-col gap-10">
                <h1 className="text-primary text-2xl font-semibold">Core Competencies</h1>
                <div className="skills-container grid grid-rows-3 grid-cols-2 gap-5">
                    {
                        skillSection.map((item, index) => (
                            <div className="flex flex-col justify-center items-center text-gray-400 border border-gray-600 rounded-md h-[30vw] text-center p-2" key={index}>
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
                    <div className={`img-container ${projectInformation.projectImage[index]} bg-top bg-cover bg-no-repeat min-h-[50vw] rounded-t-md -m-5`}>
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
        </section>
    )
}