import PropTypes from "prop-types";
import Button from "./Button.jsx";
import { AiFillDelete } from "react-icons/ai";
import styles from "./ToDoItems.module.css";


const ToDoItems = ({name, date, index, deleteToDo}) => {
  const deleteButton = () => {
    deleteToDo(index);
  }
  return(
    <>
      <div className={styles.toDoItems}>
        <div className="row row-2">
          <div className="col">{name}</div>
          <div className="col-3">{date}</div>
          <div className="col-2">
            <Button name={<AiFillDelete />} type="btn btn-light" onClickFunction={deleteButton}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

ToDoItems.prototype = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired,
}

export default ToDoItems;