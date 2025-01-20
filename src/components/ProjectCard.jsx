/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

//Node modules
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, link, website, classes }) => {
  return (
    <div
      className={
        `relative p-5 rounded-3xl bg-zinc-800 
     hover:bg-zinc-700/60 active:bg-zinc-700/70 shadow-lg hover:shadow-xl 
     transition-all duration-300 ring-1 ring-inset ring-zinc-50/10 ` + classes
      }
    >
      <figure className="img-box aspect-square rounded-xl overflow-hidden mb-4">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

          {website && (
            <p className="text-sm">
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Live Demo →
              </a>
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 mt-3">
            {tags.map((label, key) => (
              <span
                key={key}
                className="px-3 py-1 text-sm text-zinc-300 bg-zinc-50/5 rounded-full border border-zinc-600"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative rounded-full w-10 h-10 grid place-items-center text-zinc-950 shrink-0 hover:bg-black">
          <span aria-hidden="true">
            <img src="./images/github-mark-white.png" alt="" />
            <a href={link} target="_blank" className="absolute inset-0"></a>
          </span>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  website: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
