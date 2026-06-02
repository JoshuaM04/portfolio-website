import { useState, useEffect } from 'react';

export default function Main() {
    const skillSection = ["React", "State Management", "TypeScript", "CSS Architecture", "Tailwind CSS", "Responsive Design"]
    const projectInformation = {
        projectImage: ["bg-[url(../images/LoopStudios.png)]", "bg-[url(../images/tipCalculator.png)]", "bg-[url(../images/contactForm.png)]", "bg-[url(../images/timeTrackingDashboard.png)]", "bg-[url(../images/newsHomepage.png)]", "bg-[url(../images/nftPreviewCardComponent.png)]"],
        projectNames: ["LoopStudios Landing Page", "Tip Calculator App", "Contact Form", "Time Tracking Dashboard", "News Homepage", "NFT Preview Card Component"],
        projectDescriptions: [`An animation-driven landing page that showcases VR technology. Crafted with React to organize contents of the page into functional components, Tailwind CSS to enhance type-writer effects via the theme directive, and TypeScript
                               for static typing.`]
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
    }, [])

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
                
                <div className="flex flex-col gap-10 border rounded-md border-gray-600 h-125 p-5">
                    <div className={`img-container ${projectInformation.projectImage[index]} bg-center bg-contain bg-no-repeat h-50 rounded-t-md -m-5`}>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-primary text-xl font-semibold">
                            {projectInformation.projectNames[index]}
                        </h3>
                        <p className="text-gray-400">
                            {projectInformation.projectDescriptions[index]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}