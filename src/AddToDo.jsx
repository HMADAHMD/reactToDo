import TextField from "./TextField.jsx";
import Button from "./Button.jsx";
import { MdNoteAdd } from "react-icons/md";
import styles from "./AddToDo.module.css";
import PropTypes from "prop-types";
import {useState} from "react";


const AddToDo = ({addButton}) => {
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const addClickButton = (event) => {
    addButton({name: inputText, date: inputDate});
    event.preventDefault();
    setInputText("");
    setInputDate("");
    console.log(`${inputText} added on ${inputDate}`)
  }
  return(
    <>
      <div className={styles.addToDo}>
        <form action="" className="row row-2"  onSubmit={addClickButton}>
          <div className="col">
            <TextField setText={inputText} onChange={(e) => setInputText(e.target.value)  }></TextField>
          </div>
          <div className="col-3">
            <input type="date" onChange={(e) => setInputDate(e.target.value)}></input>
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