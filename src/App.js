import React from 'react';
import './App.css';
import Header from './Header';
import ToDoItem from './ToDoItem';
import todoData from './todoData';

class App extends React.Component{

  constructor() {
    super()
    this.state = {
      loading: false,
      todos: todoData,
      tasks: {},
      character: {}
    }
    this.handleChange=this.handleChange.bind(this)
  }

  // if i want to fetch data from an API this is the request I could use
  // componentDidMount() {
  //   fetch("https://swapi.co/api/people/1").then(response => response.json()).then(data => {this.setState({character: data})})
  // }

  componentDidMount() {
    this.setState({loading: true})
    fetch("http://localhost:3000/api/tasks/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          tasks: data
        })
      })
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

  

  render(){
    const ToDoItems = this.state.todos.map(item => <ToDoItem 
                                                      key={item.id} 
                                                      item={item} 
                                                      handleChange={this.handleChange}
                                                    />)

    const text = this.state.loading ? "Loading" : this.state.tasks.desc

    console.log("-----------------");
    console.log(this.state.tasks);
    console.log("-----------------");
    return(
      <div>
        <Header />

        <div className="myList">
          {/* <ToDoItem tasks={{description:"Clean dishes"}}/>
          <ToDoItem tasks={{description:"Buy groceries"}}/>
          <ToDoItem tasks={{description:"Make bed"}}/>
          <ToDoItem tasks={{description:"Vacuum living room"}}/> */}

          {ToDoItems}
          <p>{text}</p>
        </div>
      </div> 
    )
  }
}

export default App;
