import React from "react";
import { useState } from "react";
import TodoFormm from "./TodoFormm";

import { AiFillCloseCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";

export default function Todo(todos, competeTodo, removeTodo, updateTodo) {
  const [edt, setEdt] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edt.id, value);
    setEdt({
      id: null,
      value: "",
    });
  };
  if (edt.id) {
    return <TodoFormm edt={edt} onSubmite={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "toddo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => competeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icon">
        <AiFillCloseCircle
          onClick={() => removeTodo(todo.id)}
          className="delet-icon"
        />
        <TiEdit
          onClick={() => setEdt({ id: todo.id, value: todo.text })}
          className="edtt-icon"
        />
      </div>
    </div>
  ));
}
