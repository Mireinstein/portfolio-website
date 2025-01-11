/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Components
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "./images/rumble-homepage.png",
    title: "Mammoth Rumble - A decentralized voting platform",
    tags: ["Solidiy", "Web3", "React", "Bootstrap", "Ethers API" ],
    link: "http://github.com/AimeCesaireM/Decentralized-Voting",
    website: "http://34.44.182.12/"

  },
  {
    imgSrc: "./images/ai.jpeg",
    title: "Intelligent Pacman agents",
    tags: ["Adversarial Search", "Reinforcement Learning", "Python"],
    link: "https://github.com/AimeCesaireM/AI-Projects",
    website: ""
  },
  {
    imgSrc: "./images/ml.jpg",
    title: "Soccer Data Analytics",
    tags: ["Machine Learning", "Data Science", "Regression models", "Python"],
    link: "https://github.com/AimeCesaireM/PremierLeagueMLProject",
    website: ""
  },
  {
    imgSrc: "./images/networks.jpeg",
    title: "Network Infrastructure Simulation",
    tags: ["Network Protocols", "CRC Error Handling", "Java"],
    link: "https://github.com/AimeCesaireM/routing",
    website: ""
  },
  {
    imgSrc: "./images/security.jpeg",
    title: "Phase1 - A steganography detector",
    tags: ["Steganography", "Pixel Manipulation", "Java"],
    link: "https://github.com/AimeCesaireM/Steganography-Detector",
    website: ""
  },
  {
    imgSrc: "./images/game-2.png",
    title: "Brickbreaker Game in Unity Engine",
    tags: ["Unity Engine", "C#", "Object Oriented Programming"],
    link: "https://github.com/AimeCesaireM/Brick-Breaker",
    website: ""
  },
  {
    imgSrc: "./images/crypto.jpeg",
    title: "ouispar - tool suite for elliptic curve cryptography",
    tags: ["Cryptanalysis", "Abstract Algebra", "Python"],
    link: "https://github.com/AimeCesaireM/ecc-cryptography",
    website: ""
  },
  {
    imgSrc: "./images/naona.png",
    title: "Naona -a LAN Video Chat App",
    tags: ["WebRTC", "Socket.io", "JavaScript"],
    link: "https://github.com/AimeCesaireM/Naona",
    website: ""
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Highlight Projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {works.map(({ imgSrc, title, tags, link, website }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              link={link}
              website={website}
              classes=" reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
