/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 * 
 */


// Text
const welcome_paragraph = `Hi, I’m Aime Cesaire— a dedicated problem solver with a deep fascination
                        for how systems are built, optimized, and pushed to their limits.
                        I’m a full-stack developer with experience that spans artificial intelligence, machine learning,
                        penetration testing, and cryptography. My background also extends into computer networks,
                        IT infrastructure, and cloud computing. Whether I'm developing algorithms, pen-testing systems,
                        or creating data-driven applications, I’m motivated by the drive to learn, build, and innovate.`

const aboutItems = [
    {
        label: "Projects",
        number: 10
    },
    {
        label:"Languages",
        number: 5
    },
    {
        label: "Years in tech",
        number: "6",
    }
    
]


const About = () => {
  return (
   <section id="about" className="section">

        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">

                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    {welcome_paragraph}

                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) =>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                {/* <img
                 src="/images/logo.png"
                 alt="Logo"
                 width={50}
                 height={50}
                 className="ml-auto md:w-[60px] md:h-[60px]" /> */}

                </div>

            </div>

            
        </div>
   </section>

  )
}

export default About