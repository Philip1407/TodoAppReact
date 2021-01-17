import React from "react";
import "./styles.css";

export default function Filter(props) {
  return (
    <div className="filter">
      <p>Filter</p>
      <button
        className={props.filter === "all" ? "filter-choose" : ""}
        name="all"
        onClick={props.FilterClick}
      >
        All
      </button>
      <button
        className={props.filter === "done" ? "filter-choose" : ""}
        name="done"
        onClick={props.FilterClick}
      >
        Done
      </button>
      <button
        className={props.filter === "active" ? "filter-choose" : ""}
        name="active"
        onClick={props.FilterClick}
      >
        Active
      </button>
    </div>
  );
}
