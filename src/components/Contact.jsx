/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 * 
 */
const socialLinks = [
    {
        icon: "/images/github-mark-white.png",
        href: "https://github.com/AimeCesaireM",
        alt: "Github"
    },
    {
        icon: "/images/linkedin.png",
        href: "https://www.linkedin.com/in/aime-cesaire-mugishawayo/",
        alt: "Linkedin"
    },
    {
        icon: "/images/handshake.png",
        href: "https://amherst.joinhandshake.com/profiles/33363579",
        alt: "Handshake"

    },
    {
        icon: "/images/substack.png",
        href: "https://aimecesaire.substack.com",
        alt:   "Substack"
    }
]

const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
    >
        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="mb-12 lg:mb-0 lg:flex lg:flex-col ">

                <h2 className="headline-2 lg:max-w-[12ch] reveal-up ">
                    {`Find me on these platforms!`}
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[50ch] reveal-up">
                    Whether you just want to read my musings on tech or contact me for opportunities, click and find me on these platforms.
                </p>
                <div className="flex items-center  gap-12 mt-auto">
                {
                    socialLinks.map(({ icon, href, alt }, key) => (
                        <div key ={key} className="relative rounded-lg w-12 h-12 grid place-items-center mb-12 ring-2 ring-zinc-50/5
                        transition-[background-color, color] border-0 opacity-100 hover:opacity-60 transition duration-300 active:opacity-30 reveal-up" >
                            <span aria-hidden="true" >
                                <img className="" src={icon} alt={alt} />
                                    <a
                                        href={href}
                                        target='_blank'
                                        className="absolute inset-0"
                                    >
                                    </a>
                            </span>
                        </div>
            
    ))
}

                </div>
            </div>

    </div>

    </section>
  )
}

export default Contact