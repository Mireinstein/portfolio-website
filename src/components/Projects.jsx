/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Components
import ProjectCard from "./ProjectCard"

const works = [
    {
      imgSrc: "/images/ai.png",
      title: "Intelligent Pacman agents",
      tags: [ "Adversarial Search","Reinforcement Learning", "Python"],
      link: ""
    },
    {
      imgSrc: "/images/ml.png",
      title: "English Premier League Analytics",
      tags: ["Machine Learning", "Regression models", "Python"],
      link: ""
    },
    {
      imgSrc: "/images/networks.png",
      title: "Network Layer Simulation",
      tags: ["Network Protocols", "CRC Error Handling", "Java"],
      link: ""
   },
   {
      imgSrc: "/images/security.png",
      title: "Concealed data extraction",
      tags: ["Steganography", "Pixel Manipulation", "Java"],
      link: ""
   },
    {
      imgSrc: "/images/systems.png",
      title: "Heap Allocation Optimizations",
      tags: ["Systems", "RAM", "C"],
      link: ""
    },
    {
      imgSrc: "/images/games.png",
      title:"Brickbreaker Game",
      tags:["Unity Engine", "C#"],
      link: ""
    },
    {
      imgSrc: "/images/crypto.png",
      title: "Elliptic Curve Cryptography",
      tags: ["Cryptanalysis", "Abstract Algebra", "Python"],
      link:""
    },
    {
      imgSrc: "/images/naona.png",
      title: "LAN Video Chat App",
      tags: ["WebRTC", "Socket.io", "JavaScript"],
    }

]

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
      >
        <div className="container">

          <h2 className="headline-2 mb-8">
            My Portfolio Highlights
          </h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {works.map(({imgSrc, title, tags, link}, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                link={link} />

            ))
              
            }
          </div>
            
            
        </div>
      </section>

  )
}

export default Projects