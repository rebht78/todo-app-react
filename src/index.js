import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/todo-list/todo-list.components";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: 1, name: "Learn React" }, { id: 2, name: "Watch WWE" }]
    };
  }
  render() {
    return (
      <div>
        <h3>To Do Application</h3>
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
