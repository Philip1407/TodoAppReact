import React from "react";
import "./styles.css";

export default function TodoItem(props) {
  let cname = "todo-item";
  if (props.isDone === true) cname = cname + " done";
  let status = props.isDone;
  return (
    <tr className={cname}>
      <td className="left">
        <input
          type="checkbox"
          onClick={props.onCheck}
          onChange={(e) => {}}
          checked={status}
        />
      </td>
      <td className="middle">
        <p>{props.name}</p>
      </td>
      <td className="right">
        <button onClick={props.onDelete}>x</button>
      </td>
    </tr>
  );
}
