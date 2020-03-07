import React from 'react';

class SubmitToDo extends React.Component {
    constructor() {
        super()
        this.state = {
            desc: '',
        }
    }

    handleChange = event => {
        this.setState({
            desc: event.target.value
        })
    }
    render() {
        return (
            <div>
                <label>
                    Any new tasks?
                        <input type="text" name="task" onChange={this.handleChange} />
                </label>
                <button type="button" onClick={() => this.props.addTask(this.state.desc)}>Add</button>

            </div>
        )
    }
}

export default SubmitToDo