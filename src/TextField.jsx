import PropTypes from "prop-types";

const TextField = ({setText, onChange}) => {
  return(
    <>
      <input
      type="text"
      value={setText}
      onChange={onChange}
      >

      </input>
    </>
  );
}

TextField.prototype ={
  setText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
export default TextField;