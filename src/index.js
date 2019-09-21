import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/todo-list/todo-list.components";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>To Do Application</h3>
        <ToDoList />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
