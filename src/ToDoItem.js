import React from 'react';

const completedTaskStyle = {
  color: "#cdcdcd",
  textDecoration: "line-through"
}

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tasks: [],
    }

  }


  render() {
    return (
      <div>
        {/* <div > className="myList" */}
        <div>
          <div>
            {this.props.tasks.map(task => (
              <div className="myList" style={{ display: "flex" }}>
                <input type="checkbox" checked={task.completed} />
                <p style={task.completed ? completedTaskStyle : null}> {task.desc} </p>
                <button type="button" onClick={() => this.props.deleteTask(task.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoItem;