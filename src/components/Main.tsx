export default function Main() {
    const skillSection = ["React", "State Management", "TypeScript", "CSS Architecture", "Tailwind CSS", "Responsive Design"]

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
        </section>
    )
}