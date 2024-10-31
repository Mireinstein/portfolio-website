/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Components
import SkillCard from "./SkillCard"

//skill items

const skillItems = [
  {
      imgSrc: "/images/python.png",
      title: "Python",
      desc: "AI and ML Development",
      link: "https://www.python.org/"
  },
  {
      imgSrc: "/images/java.svg",
      title: "Java",
      desc: " App Development",
      link: "https://www.java.com/en/"
  },
  {
      imgSrc: "/images/typescript.png",
      title: "TypeScript",
      desc: "Web Development",
      link: "https://www.typescriptlang.org/"
  },
  {
      imgSrc: "/images/nodejs.svg",
      title: "NodeJS",
      desc: "Web Server",
      link: "https://nodejs.org/en/"
  },
  {
      imgSrc: "/images/react.png",
      title: "React",
      desc: "Frontend Framework",
      link: "https://reactjs.org/"
  },
  {
      imgSrc: "/images/tailwind.png",
      title: "TailwindCSS",
      desc: "CSS Framework",
      link: "https://tailwindcss.com/"
  },
  {
      imgSrc: "/images/mysql.png",
      title: "MySQL",
      desc: "Database",
      link: "https://www.mysql.com/"
  },
  {
      imgSrc: "/images/azure.png",
      title: "Azure",
      desc: "Cloud",
      link: "https://azure.microsoft.com/"
  }
]


const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          My Tech Stack
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up" >
          Some of the tools I am currently using.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({imgSrc, title, desc, link}, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              link={link}
              classes = "reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills