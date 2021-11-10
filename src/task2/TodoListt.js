import React from "react";
import { useState } from "react";

import TodoFormm from "./TodoFormm";
import Todo from "./Todo";
import { Prev } from "react-bootstrap/esm/PageItem";

export default function TodoListt() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    // if(!todo.text || /^\s*$.test(todo.taxt)){
    //     return
    // }

    const newTodos = [todo, ...todos];
    settodos(newTodos);
  };




  const updateTodo =(todoId , newValue)=>{
    settodos(Prev=>Prev.map(item=>(item.id===todoId ? newValue : item)))
  }





const removeTodo=id=>{

    const removeArr=[...todos].filter(todo=>todo.id !== id)
    settodos(removeArr);
}




  const competeTodo= id=>{
      let updateTodos = todos.map(todo =>{
       if(todo.id===id){
           todo.isComplete = !todo.isComplete
       }   
       return todo
      })
      settodos(updateTodos);
  }
  return (
    <div>
      <h1>what is ur palns today</h1>

      <TodoFormm onSubmite={addTodo} />

      {/* <Todo Todo():any:={addTodo}/> */}

      <Todo todos={todos} competeTodo={competeTodo} removeTodo={removeTodo}  updateTodo={updateTodo}/>

    </div>
  );
}
