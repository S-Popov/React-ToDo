import React from 'react';

const completedTaskStyle = {
    color: "#cdcdcd",
    textDecoration: "line-through"
}

const ToDoItem = (props) =>
    <div className="todoItem">
        <input 
            type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
        /> 
        <p style={props.item.completed ? completedTaskStyle: null}> {props.item.text} </p>
    </div>

/* in case we have a prop which is null we might not want to show some hardcoded information
    in such cases we can put the follwoing code in to the paragraph tag
style={{display: props.task.description ? "block" : "none"}}
or
style={{display: !props.question && "none"}}
*/

export default ToDoItem;