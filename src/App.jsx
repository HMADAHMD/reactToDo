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

  const addToDO = (newToDo) => {
    setList([...list, newToDo])
  }

  const deleteTodo = (id) => {
    setList(list.filter((_, index) => index !== id))
  }
  return (
    <>
      <div className="container">
          <AddToDo addButton={addToDO}></AddToDo>
          {list.map((todo, index) => (
            <ToDoItems key={index} name={todo.name} date={todo.date} index={index} deleteToDo={deleteTodo}></ToDoItems>
          ))}
      </div>
    </>
  )
}

export default App
