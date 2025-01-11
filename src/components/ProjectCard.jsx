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
        `relative p-4 rounded-2xl bg-zinc-800
         hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset
          ring-zinc-50/5 transition-colors ` + classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>

          {website !== "" && (
            <p className="text-sm text-color-secondary">
              <a
                href={website}
                target="_blank"
                className="text-blue-500 text-xl font-bold hover:underline"
              >
                Live Website
              </a>
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className=" h-10 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
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
  tags: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
