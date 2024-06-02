import PropTypes from "prop-types";

const Button = ({type, name, onClickFunction}) => {
  return(
    <>
      <button type="button" className={type} onClick={onClickFunction}>{name}</button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClickFunction: PropTypes.func,
}
export default Button;