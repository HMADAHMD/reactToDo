import PropTypes from "prop-types";

const TextField = ({reference, setText}) => {
  return(
    <>
      <input className="form-control"
      type="text"
      value={setText}
      ref={reference}
      >

      </input>
    </>
  );
}

TextField.prototype ={
  setText: PropTypes.string.isRequired,
  reference: PropTypes.func.isRequired
}
export default TextField;