import './App.css'
import AddToDo from "./AddToDo.jsx";
import ToDoItems from "./ToDoItems.jsx";
import {useState} from "react";

function App() {
  const listTodos = [
    {name: "hammad", date: "23"},
    {name: "fahad", date: "19"}
  ]
  const [list, setList] = useState(listTodos);

  const addToDO = () => {
    // console.log("add button pressed")
  }
  return (
    <>
      <div className="container">
          <AddToDo addButton={addToDO}></AddToDo>
          {listTodos.map((todo, index) => (
            <ToDoItems key={index} name={todo.name} date={todo.date} index={index}></ToDoItems>
          ))}
      </div>
    </>
  )
}

export default App
