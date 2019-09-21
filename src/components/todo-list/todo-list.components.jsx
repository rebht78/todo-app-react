import React from "react";
import ToDo from "../components/todo/todo.components";

class ToDoList extends React.Component {
  render() {
    let todos = this.props.todos;
    
    return (
      <div>
        <ul>
        {
          todos.map(todo => <ToDo key={todo.id} task={todo.name})
        }
        </ul>
      </div>
    );
  }
}

export default ToDoList;
