import React from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  /* Add new todo item*/
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  /* Mark a todo item as complete */
  const completeTodo = (index) => {
    const newTodos = [...todos]; //
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  /* Delete todo item */
  const removeTodo = (index) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1); // aw 1 dana bsrawa agar 3danabe ayay ba 3

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
