import './App.css'
import AddToDo from "./AddToDo.jsx";
import ToDoItems from "./ToDoItems.jsx";
import {useState} from "react";

function App() {
  const listTodos = [
    {name: "chick fil ", date: "2024-05-15"},
    {name: "wash", date: "2024-05-15"}
  ]
  const [list, setList] = useState(listTodos);

  // const addToDo = (newToDo) => {
  //   setList([...list, newToDo])
  // }

  const addToDo = (newToDo) => {
    setList((currentValue) => [...currentValue, newToDo]);
  };

  const deleteTodo = (id) => {
    setList(list.filter((_, index) => index !== id))
  }
  return (
    <>
      <div className="container">
          <AddToDo addButton={addToDo}></AddToDo>
          {list.map((todo, index) => (
            <ToDoItems key={index} name={todo.name} date={todo.date} index={index} deleteToDo={deleteTodo}></ToDoItems>
          ))}
      </div>
    </>
  )
}

export default App
