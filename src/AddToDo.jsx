import TextField from "./TextField.jsx";
import { MdNoteAdd } from "react-icons/md";
import styles from "./AddToDo.module.css";
import PropTypes from "prop-types";
import {useRef} from "react";


const AddToDo = ({addButton}) => {
  const toDoName = useRef();
  const toDoDate = useRef();

  const addClickButton = (event) => {
    const inputText = toDoName.current.value;
    const inputDate = toDoDate.current.value;
    toDoName.current.value = "";
    toDoDate.current.value = "";
    addButton({name: inputText, date: inputDate});
    event.preventDefault();
    console.log(`${inputText} added on ${inputDate}`)
  }

  return(
    <>
      <div className={styles.addToDo}>
        <form action="" className="row row-2"
        onSubmit={addClickButton}>
          <div className="col">
            <TextField reference={toDoName}></TextField>
          </div>
          <div className="col-3">
            <input type="date"
            ref={toDoDate}></input>
          </div>
          <div className="col-2">
            <button className="btn btn-light"
            ><MdNoteAdd /></button>
          </div>
        </form>
      </div>

    </>
  );
}
AddToDo.propTypes = {
  addButton: PropTypes.func.isRequired
}

export default AddToDo;