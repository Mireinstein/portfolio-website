/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 *  
 */

//Node Modules
import PropTypes from "prop-types"


//Primary Button

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
  return (
    <div>Button</div>
  )
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string
    


export {
    ButtonPrimary
}