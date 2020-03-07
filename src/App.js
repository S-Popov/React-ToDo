import React from 'react';
import './App.css';
import Header from './Header';
import ToDoItem from './ToDoItem';
import SubmitToDo from './SubmitToDo';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: false,
      tasks: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  callApiGet() {
    this.setState({ loading: true })
    fetch("http://localhost:3000/api/tasks")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          tasks: data
        })
      })
  }

  DeleteTask = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3000/api/tasks/${id}`)
      .then(res => {
        this.callApiGet();
        console.log(res)
        console.log(res.data)
      })
  }

  AddTask = description => {
    const task = {
        desc: description,
    }
    axios.post('http://localhost:3000/api/tasks/', {task})
      .then(res => {
          this.callApiGet();
          console.log(res)
          console.log(res.data)
      })
  }

  componentDidMount() {
    this.callApiGet();
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <ToDoItem tasks={this.state.tasks} deleteTask={this.DeleteTask} />
        <SubmitToDo tasks={this.state.tasks} addTask={this.AddTask}/>
      </div>
    )

  }
}

export default App;
