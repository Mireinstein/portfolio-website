/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Components
import ProjectCard from "./ProjectCard"

const works = [
    {
      imgSrc: "./images/ai.jpeg",
      title: "Intelligent Pacman agents",
      tags: [ "Adversarial Search","Reinforcement Learning", "Python"],
      link: "https://github.com/AimeCesaireM/AI-Projects"
    },
    {
      imgSrc: "./images/ml.jpg",
      title: "English Premier League Analytics",
      tags: ["Machine Learning", "Regression models", "Python"],
      link: "https://github.com/AimeCesaireM/PremierLeagueMLProject"
    },
    {
      imgSrc: "./images/networks.jpeg",
      title: "Network Layer Simulation",
      tags: ["Network Protocols", "CRC Error Handling", "Java"],
      link: "https://github.com/AimeCesaireM/routing"
   },
   {
      imgSrc: "./images/security.jpeg",
      title: "Concealed data extraction",
      tags: ["Steganography", "Pixel Manipulation", "Java"],
      link: "https://github.com/AimeCesaireM/Steganography-Detector"
   },
    {
      imgSrc: "./images/systems.jpeg",
      title: "Heap Allocation Optimizations",
      tags: ["Systems", "RAM", "C"],
      link: "https://github.com/AimeCesaireM/best-fit-heap-allocator"
    },
    {
      imgSrc: "./images/game-2.png",
      title:"Brickbreaker Game",
      tags:["Unity Engine", "C#"],
      link: "https://github.com/AimeCesaireM/Brick-Breaker"
    },
    {
      imgSrc: "./images/crypto.jpeg",
      title: "Elliptic Curve Cryptography",
      tags: ["Cryptanalysis", "Abstract Algebra", "Python"],
      link: "https://github.com/AimeCesaireM/ecc-cryptography"
    },
    {
      imgSrc: "./images/naona.png",
      title: "LAN Video Chat App",
      tags: ["WebRTC", "Socket.io", "JavaScript"],
      link: "https://github.com/AimeCesaireM/Naona"
    }

]

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
      >
        <div className="container">

          <h2 className="headline-2 mb-8 reveal-up">
            My Highlight Projects
          </h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {works.map(({imgSrc, title, tags, link}, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                link={link}
                classes=" reveal-up"
                 />

            ))
              
            }
          </div>
            
            
        </div>
      </section>

  )
}

export default Projects