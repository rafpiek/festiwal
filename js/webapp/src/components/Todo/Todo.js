import React from 'react';

export default class Todo extends React.Component {
  state = {
    todo: {
      completed: false,
      title: "Learn React"
    }
  }

  handleTodoComplete() {
    this.setState({ todo: { ...this.state.todo, completed: !this.state.todo.completed } })
  }


  render() {
    const { todo } = this.state;

    return (
      <div className="container">
        <input type='checkbox' checked={todo.completed} onChange={this.handleTodoComplete}/>
        <label>{todo.title}</label>
      </div>
    )
  }
}
