import PropTypes from "prop-types";

const TextField = ({value, onChange}) => {
  return(
    <>
      <input
      type="text"
      value={value}
      onChange={onChange}
      >

      </input>
    </>
  );
}

TextField.prototype ={
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
export default TextField;