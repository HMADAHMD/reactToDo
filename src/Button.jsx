import PropTypes from "prop-types";

const Button = ({btnType, type, name, onClickFunction}) => {
  return(
    <>
      <button type={btnType} className={type} onClick={onClickFunction}>{name}</button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClickFunction: PropTypes.func,
  btnType: PropTypes.string,
  onSubmit: PropTypes.func,
}
export default Button;