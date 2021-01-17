import React from "react";
import Filter from "./Filter";
import TodoItem from "./TodoItem";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlist: [
        {
          name: "This is a very long line to tell you what you gonna do",
          done: false
        }
      ],
      filter: "all"
    };
  }

  addTodoItem(e) {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        let addItem = { name: e.target.value, done: false };
        this.setState({ itemlist: this.state.itemlist.concat(addItem) });
        e.target.value = "";
      }
      e.target.blur();
    }
  }

  onItemCheck(e, i) {
    let list = this.state.itemlist;
    list[i].done = e.target.checked;
    this.setState({ itemlist: list });
  }

  DeleteItem(e, i) {
    let list = this.state.itemlist;
    list.splice(i, 1);
    this.setState({ itemlist: list });
  }

  FilterClick(e, list) {
    switch (e.target.name) {
      case "done":
        this.setState({ filter: "done" });
        break;
      case "active":
        this.setState({ filter: "active" });
        break;
      default:
        this.setState({ filter: "all" });
        break;
    }
  }

  ToogleAllClick() {
    switch (this.state.filter) {
      case "done":
        let list = this.state.itemlist;
        list.map((e) => (e.done === true ? (e.done = false) : 0));
        this.setState({ itemlist: list });
        break;
      case "active":
        list = this.state.itemlist;
        list.map((e) => (e.done === false ? (e.done = true) : 0));
        this.setState({ itemlist: list });
        break;
      default:
        list = this.state.itemlist;
        list.map((e) => (e.done === true ? (e.done = false) : (e.done = true)));
        this.setState({ itemlist: list });
        break;
    }
  }

  render() {
    let ItemList = this.state.itemlist;
    let FilterEle = (value) => {
      if (this.state.filter === "done") return value.done === true;
      if (this.state.filter === "active") return value.done === false;
      return true;
    };
    return (
      <div className="App">
        <h1> Todo App</h1>
        <input
          className="add-todo"
          placeholder="Enter todo name here"
          onKeyPress={(e) => this.addTodoItem(e)}
        ></input>
        <table className="list">
          <tbody>
            {ItemList.filter((e) => FilterEle(e)).map((e, index) => (
              <TodoItem
                key={index}
                name={e.name}
                isDone={e.done}
                onCheck={(e) => this.onItemCheck(e, index)}
                onDelete={(e) => this.DeleteItem(e, index)}
              />
            ))}
          </tbody>
        </table>
        <br />
        <button onClick={(e) => this.ToogleAllClick()}>Toogle All</button>
        <Filter
          FilterClick={(e) => this.FilterClick(e, ItemList)}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
