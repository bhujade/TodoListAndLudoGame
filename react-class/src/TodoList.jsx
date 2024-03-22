import { useState } from "react";
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(),isDone:false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(),isDone:false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAllDone = ()=>{
    setTodos((todos)=>
       todos.map((todo)=>{
        return{
          ...todo,
          isDone:true,
        };
    }),
    );
  };

  let markAsDone = (id)=>{
    setTodos((todos)=>
    todos.map((todo)=>{
      if(todo.id == id){

        return{
          ...todo,
          isDone: true,
        };
      }
      else{
        return todo;
      }
    }),
    );
      
  }

  return (
    <div>
      <input
        placeholder="add task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      &nbsp;
      <button id="b1" onClick={addNewTask}>
        Add Task
      </button>
      <br />
      <br />
      <br />

      <hr />
      
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
             &nbsp;&nbsp;
            <button id="b2" onClick={()=>deleteTodo(todo.id)}>
              Delete
            </button>
            &nbsp;
            <button onClick={()=>markAsDone(todo.id)}>
            markAsDone
            </button>
          </li>
        ))}
      </ul>
      <br/><br/>
      <button onClick={markAllDone}>markAllDone </button>
    </div>
    
  );
}
