import React from "react";
import { useState } from "react";

export default function Formm(props) {
  const [input, setinput] = useState("");

  const handleSubmite = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      Text: input,
    });

    setinput("");
  };

  const handleChang = (e) => {
    setinput(e.target.value);
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmite}>
        <input
          type="text"
          placeholder="add todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChang}
        ></input>
        <button className="todo-button">add Todo</button>
      </form>
    </div>
  );
}
// function Form() {
//     function handleSubmit(e) {
//       e.preventDefault();
//       console.log('You clicked submit.');
//     }

//     return (
//       <form onSubmit={handleSubmit}>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
