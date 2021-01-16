import React from "react";
import "./styles.css";

export default function TodoItem(props) {
  let cname = "todo-item";
  if (props.isDone === true) cname = cname + " done";
  let status = props.isDone;
  return (
    <div className={cname}>
      <div className="column left">
        <input
          type="checkbox"
          onClick={props.onCheck}
          onChange={(e) => {}}
          checked={status}
        />
        <p>{props.name}</p>
      </div>
      <button onClick={props.onDelete}>x</button>
    </div>
  );
}
