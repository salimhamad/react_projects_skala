import React from "react";
// aw 4 oarmitary la bawanawa wargrtwa ka app.js

export default function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button className="btn-complete" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className="btn-delete" onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
    </div>
  );
}

//   function TodoItems({props }) {
//   return (
//     <div
//       className="todo"
//       style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
//     >
//       {props.todo.text}
//       <div>
//         <button className="btn-complete" onClick={() => props.completeTodo(index)}>
//           Complete
//         </button>
//         <button className="btn-delete" onClick={() => props.removeTodo(index)}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// }
