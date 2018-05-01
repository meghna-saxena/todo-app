import React, { Component } from 'react';
import './AddItem.css'

class AddItem extends Component {
    state = {
        name: ""
    }

    inputChangedHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    submitHandler= () => {
        const task = this.state.name; //name is carrying value
        this.setState({ name: "" }) //name is empty
        this.props.itemAdded(task); 
    }



    render() {
        return (
            <div className="add-item">
                <input type="text" placeholder="Buy groceries.." onChange={this.inputChangedHandler} value={this.state.name} />
                {/* <button className="btn-item" onClick={() => this.props.itemAdded(this.state.name)}>Add Task</button> */
                    <button className="btn-item" onClick={this.submitHandler}>Add Task</button>}
            </div>
        );
    }
}

export default AddItem;