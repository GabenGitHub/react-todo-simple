import React from 'react';
import Todos from './components/todos.component';
import AddTodo from './components/add-form.component';

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({todos})
  };

  addTodo = (todo) => {
    const todos = [...this.state.todos, todo];
    this.setState({todos})
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className='center blue-text'>Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  };
};

export default App;
