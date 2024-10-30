/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Node modules
import PropTypes from 'prop-types'


const SkillCard = ({
    imgSrc,
    title,
    desc,
    link,
    classes
}) => {
  return (
    <div className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10  rounded-2xl p-3 hover:bg-zinc-800 transition-colors group  ${classes}`}>
        <figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
            <a href={link}>
                <img
                src={imgSrc}
                width={32}
                height={32}
                alt={title} />
            </a>
            
            
        </figure>

        <div>
            <h3>{title}</h3>

            <p className='text-zinc-400 text-sm'>{desc}</p>
            
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard

