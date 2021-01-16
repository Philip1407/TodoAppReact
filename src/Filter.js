import React from "react";
import "./styles.css";

export default function Filter(props) {
  return (
    <div className="filter">
      <p>Filter</p>
      <button name="all" onClick={props.FilterClick}>
        All
      </button>
      <button name="done" onClick={props.FilterClick}>
        Done
      </button>
      <button name="active" onClick={props.FilterClick}>
        Active
      </button>
    </div>
  );
}
